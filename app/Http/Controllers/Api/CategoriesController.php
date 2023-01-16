<?php

namespace Vanguard\Http\Controllers\Api;

use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;
use Vanguard\Categories;
use Vanguard\Http\Controllers\Controller;
use Vanguard\Http\Resources\CategoryResource;
use Vanguard\Http\Resources\KhoahocResource;
use Vanguard\KhoaHoc;
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

    public function updateOrCreate(Request $request)
    {
        $data = collect($request->all());
        $data = $data->only([
            'cate_name'
        ])->toArray();

        $category = Categories::UpdateOrCreate(
            [
                'id' => $request->id
            ],
            $data
        );
        return new CategoryResource($category);
    }

    public function destroy($id)
    {
        $category = QueryBuilder::for(Categories::where('id', $id))->first();
        if ($category){
            if($category->khoahoc()->count()!= 0){
                return response()->json(['error'=> true,'msg'=> 'Không thể xoá khoá học.']);
            }else{
                $category->delete();
                return response()->json(['error'=> false,'msg'=> 'Xoá thành công.']);
            }
        }else{
            return response()->json(['error'=> true,'msg'=> 'fail id cate']);
        }
    }
}
