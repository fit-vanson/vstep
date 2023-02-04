<?php

namespace Vanguard\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;
use Spatie\QueryBuilder\QueryBuilder;
use Vanguard\Baihoc;
use Vanguard\Http\Controllers\Controller;
use Vanguard\Http\Resources\BaihocResource;
use Vanguard\KhoaHoc;
use Vanguard\Repositories\Baihoc\BaihocRepository;
use Vanguard\User;

class BaihocController extends Controller
{
    public function __construct(private BaihocRepository $baihoc)
    {
        // Allow access to authenticated users only.
        $this->middleware('auth')->except('getzipfileIdBaihoc');

    }

    public function getbykhoahoc($id,Request $request)
    {
//        $this->middleware('auth');
        $this->middleware('permission:baihoc.manage', ['only' => ['create', 'edit', 'destroy']]);
        $baihocs = QueryBuilder::for(Baihoc::where('khoahoc_id', $id))
            ->paginate($request->per_page ?: 20);
        return BaihocResource::collection($baihocs);
    }

    public function getzipfile($id,Request $request)
    {
//        $this->middleware('auth');
        $this->middleware('permission:baihoc.manage', ['only' => ['create', 'edit', 'destroy']]);
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
//                $file_name = uniqid(Str::slug($baihoc->baihoc_name, '_') . '_') . '.' . $extension;
                $file_name = md5(time()) . '.' . $extension; // a unique file name
                $baihoc->update([
                    'baihoc_file'=>$file_name,
//                    'baihoc_pass_zip' => $this->str_encrypt($data['baihoc_pass_zip'])
                ]);
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
//        $this->middleware('auth');
        $this->middleware('permission:baihoc.manage', ['only' => ['create', 'edit', 'destroy']]);
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

    public function baihocByUser($userName,Request $request){
        $this->middleware('auth');
        $user = QueryBuilder::for(User::where('username', $userName))
            ->first();
        $baihocs = $user->baihoc->all();

        $baihocsResource = BaihocResource::collection($baihocs);
        return response()->json($baihocsResource);
    }

    public function getzipfileIdBaihoc($id,Request $request)
    {
//        $this->middleware('auth');
        $baihoc = QueryBuilder::for(Baihoc::where('id', $id))
            ->firstOrFail();
        return new BaihocResource($baihoc);

    }

    private function str_encrypt($plaintext): string
    {
        $password = env('PASSWORD_ENCRYPT');
        $method = env('METHOD_ENCRYPT');
        $iv = chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0) . chr(0x0);
        return base64_encode(openssl_encrypt($plaintext, $method, $password, OPENSSL_RAW_DATA, $iv));
    }

}
