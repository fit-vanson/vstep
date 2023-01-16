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

class KhoaHocController extends Controller
{
    public function __construct(private KhoahocRepository $khoahoc)
    {
        $this->middleware('auth');
        $this->middleware('permission:khoahoc.manage');

    }



    /**
     * Paginate all Khoá học .
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
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
        $khoahoc = QueryBuilder::for(KhoaHoc::where('id', $id))
            ->firstOrFail();
        return new KhoahocResource($khoahoc);
    }

    public function update(KhoaHoc $khoahoc, UpdateKhoahocRequest $request)
    {
        dd($request->all(),$id);
        $khoahoc = QueryBuilder::for(KhoaHoc::where('id', $id))
            ->firstOrFail();
        return new KhoahocResource($khoahoc);
    }

    public function getbycategogory($id,Request $request)
    {
        $khoahocs = QueryBuilder::for(KhoaHoc::where('cate_id', $id))
            ->paginate($request->per_page ?: 20);
        return KhoahocResource::collection($khoahocs);
    }
}
