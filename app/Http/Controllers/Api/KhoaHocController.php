<?php

namespace Vanguard\Http\Controllers\Api;

use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Vanguard\Categories;
use Vanguard\Http\Controllers\Controller;
use Vanguard\Http\Filters\KhoahocKeywordSearch;
use Vanguard\Http\Requests\Khoahoc\UpdateKhoahocRequest;
use Vanguard\Http\Resources\KhoahocResource;
use Vanguard\KhoaHoc;
use Vanguard\Repositories\Khoahoc\KhoahocRepository;
use Spatie\QueryBuilder\QueryBuilder;
use Vanguard\User;

class KhoaHocController extends Controller
{
    public function __construct(private KhoahocRepository $khoahoc)
    {
//        $this->middleware('auth');

    }

    /**
     * Paginate all Khoá học .
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $this->middleware('permission:khoahoc.manage');
        $khoahocs = QueryBuilder::for(KhoaHoc::class)
            ->defaultSort('id')
            ->paginate($request->per_page ?: 20);
        return KhoahocResource::collection($khoahocs);
    }

    /**
     * Show the info about requested user.
     * @param $id
     * @return KhoahocResource
     */
    public function show($id)
    {
        $this->middleware('permission:khoahoc.manage');
        $khoahoc = QueryBuilder::for(KhoaHoc::where('id', $id))
            ->firstOrFail();
        return new KhoahocResource($khoahoc);
    }

    public function updateOrCreate(Request $request)
    {
        $this->middleware('permission:khoahoc.manage');
        $data = collect($request->all());
        $data = $data->only([
            'khoahoc_name', 'cate_id', 'status', 'stt'
        ])->toArray();
        if (isset($data['cate_id'])) {
            $category = QueryBuilder::for(Categories::where('id', $data['cate_id']))
                ->first();
            if(!$category) {
                return response()->json(['error'=> true,'msg'=> 'fail id cate']);
            }
        }
         $khoahoc = KhoaHoc::UpdateOrCreate(
             [
                 'id' => $request->id
             ],
             $data
         );
        return new KhoahocResource($khoahoc);
    }

    public function getbycategogory($id,Request $request)
    {
        $this->middleware('permission:khoahoc.manage');
        $khoahocs = QueryBuilder::for(KhoaHoc::where('cate_id', $id))
            ->paginate($request->per_page ?: 20);
        return KhoahocResource::collection($khoahocs);
    }

    public function khoahocByUser($userName, Request $request){

        $khoahocs = QueryBuilder::for(KhoaHoc::class)
            ->defaultSort('id')
            ->paginate($request->per_page ?: 20);
        $khoahocResource = KhoahocResource::collection($khoahocs);
        return response()->json($khoahocResource);
    }
}
