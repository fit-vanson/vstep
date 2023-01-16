<?php

namespace Vanguard\Http\Controllers\Api;

use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;
use Vanguard\Categories;
use Vanguard\Http\Controllers\Controller;
use Vanguard\Http\Resources\CategoryResource;
use Vanguard\Repositories\Categories\CategoriesRepository;

class CategoriesController extends Controller
{
    public function __construct(private CategoriesRepository $khoahoc)
    {
        $this->middleware('auth');
        $this->middleware('permission:categories.manage');

    }



    /**
     * Paginate all Thể loại .
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $categories = QueryBuilder::for(Categories::class)
            ->defaultSort('id')
            ->paginate($request->per_page ?: 20);
        return CategoryResource::collection($categories);
    }
}
