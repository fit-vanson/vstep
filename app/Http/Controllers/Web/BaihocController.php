<?php

namespace Vanguard\Http\Controllers\Web;

use Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException;
use Pion\Laravel\ChunkUpload\Handler\HandlerFactory;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;
use Vanguard\Baihoc;
use Vanguard\Http\Controllers\Controller;
use Vanguard\Http\Requests\Baihoc\CreateBaihocRequest;
use Vanguard\Http\Requests\Baihoc\UpdateBaihocRequest;
use Vanguard\Repositories\Baihoc\BaihocRepository;
use Vanguard\Repositories\Khoahoc\KhoahocRepository;

class BaihocController extends Controller
{
    public function __construct(private BaihocRepository $baihoc)
    {
        // Allow access to authenticated users only.
        $this->middleware('auth')->except('uploadfile');
        $this->middleware('permission:baihoc.manage', ['only' => ['create', 'edit', 'destroy']])->except('uploadfile');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, KhoahocRepository $khoahocRepository)
    {
        $khoahocs = [];
        if (\Auth::user()->hasRole('User')) {
            if($request->search){
                $search = $request->search;
                $baihoc = collect(\Auth::user()->baihoc)->filter(function ($item) use ($search) {
                    return false !== stristr($item->baihoc_name, $search);
                });
            }else{
                $baihoc = \Auth::user()->baihoc->all();
            }

        } else {
            $baihoc = $this->baihoc->paginate($perPage = 20, $request->search, $request->khoahoc_id);
            $khoahocs = ['' => __('All')] + $khoahocRepository->lists()->toArray();
        }
        return view('baihoc.index', compact('baihoc', 'khoahocs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(KhoahocRepository $khoahocRepository)
    {
        return view('baihoc.add-edit', [
            'khoahoc' => $khoahocRepository->lists(),
            'edit' => false

        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateBaihocRequest $request)
    {
        $this->baihoc->create($request->all());
        return redirect()->route('baihoc.index')
            ->withSuccess(__('Thêm mới thành công.'));
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Baihoc $baihoc, KhoahocRepository $khoahocRepository)
    {
        return view('baihoc.add-edit', [
            'baihoc' => $baihoc,
            'khoahoc' => $khoahocRepository->lists(),
            'statuses' => ['Hoạt động', 'Dừng'],
            'edit' => true
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Baihoc $baihoc, UpdateBaihocRequest $request)
    {
        $this->baihoc->update($baihoc->id, $request->all());
        return redirect()->route('baihoc.index')
            ->withSuccess(__('Updated successfully.'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Baihoc $baihoc)
    {
        $this->baihoc->delete($baihoc->id);
        Cache::flush();
        return redirect()->route('baihoc.index')
            ->withSuccess(__('Xoá thành công.'));

    }

    public function uploadfile(Request $request){

        $receiver = new FileReceiver('file', $request, HandlerFactory::classFromRequest($request));
        if (!$receiver->isUploaded()) {
            throw new UploadMissingFileException();
        }

        $fileReceived = $receiver->receive(); // receive file
        if ($fileReceived->isFinished()) { // file uploading is complete / all chunks are uploaded
            $file = $fileReceived->getFile(); // get file
            $extension = $file->getClientOriginalExtension();
            $fileName = md5(time()) . '.' . $extension; // a unique file name

            $disk = Storage::disk('upload');
            $path = $disk->putFileAs('files', $file, $fileName);

//            $disk = Storage::disk(config('filesystems.default'));
//            $path = $disk->putFileAs('files', $file, $fileName);

            // delete chunked file
            unlink($file->getPathname());
            return [
                'path' => asset('upload/' . $path),
                'filename' => $fileName
            ];
        }
        // otherwise return percentage information
        $handler = $fileReceived->handler();
        return [
            'done' => $handler->getPercentageDone(),
            'status' => true
        ];
    }
}
