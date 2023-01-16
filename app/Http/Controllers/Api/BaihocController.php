<?php

namespace Vanguard\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Spatie\QueryBuilder\QueryBuilder;
use Vanguard\Baihoc;
use Vanguard\Http\Controllers\Controller;
use Vanguard\Http\Resources\BaihocResource;
use Vanguard\KhoaHoc;
use Vanguard\Repositories\Baihoc\BaihocRepository;

class BaihocController extends Controller
{
    public function __construct(private BaihocRepository $baihoc)
    {
        // Allow access to authenticated users only.
        $this->middleware('auth');
        $this->middleware('permission:baihoc.manage', ['only' => ['create', 'edit', 'destroy']]);
    }

    public function getbykhoahoc($id,Request $request)
    {
        $baihocs = QueryBuilder::for(Baihoc::where('khoahoc_id', $id))
            ->paginate($request->per_page ?: 20);
        return BaihocResource::collection($baihocs);
    }

    public function getzipfile($id,Request $request)
    {
        $baihoc = QueryBuilder::for(Baihoc::where('id', $id))
            ->firstOrFail();
        $file = $request->file;
        if ($file){
            $path_file = $this->getDestinationDirectory();
            $extension = $file->getClientOriginalExtension();
            if($extension == 'zip'){
                if ($baihoc->baihoc_file) {
                    $fileDelete = $path_file . '/' . $baihoc->baihoc_file;
                    try {
                        unlink($fileDelete);
                    } catch (\Exception $exception) {
                        Log::error('Message: Detele file ' . $exception->getMessage() . '--' . $exception->getLine());
                    }
                }
                $file_name = uniqid(Str::slug($baihoc->baihoc_name, '_') . '_') . '.' . $extension;
                $baihoc->update(['baihoc_file'=>$file_name]);
                $file->move($path_file, $file_name);
            }else{
                return response()->json(['error'=> true,'msg'=> 'file ZIP']);
            }
        }
        return new BaihocResource($baihoc);
    }

    private function getDestinationDirectory()
    {
        return public_path('/upload/files');
    }


    public function updateOrCreate(Request $request)
    {
        $data = collect($request->all());

        $data = $data->only([
            'khoahoc_id', 'baihoc_name', 'baihoc_link_1', 'baihoc_link_2','baihoc_stt'
        ])->toArray();

        if (isset($data['khoahoc_id'])) {
            $khoahoc = QueryBuilder::for(KhoaHoc::where('id', $data['khoahoc_id']))
                ->first();
            if(!$khoahoc) {
                return response()->json(['error'=> true,'msg'=> 'fail id Khoá học']);
            }
        }
        $baihoc = Baihoc::UpdateOrCreate(
            [
                'id' => $request->id
            ],
            $data
        );
        return new BaihocResource($baihoc);
    }

}
