<?php

namespace Vanguard\Http\Controllers\Web;

use Illuminate\Http\Request;
use Cache;
use Vanguard\Categories;
use Vanguard\Http\Controllers\Controller;
use Vanguard\Http\Requests\Categories\CreateCategoryRequest;
use Vanguard\Http\Requests\Categories\UpdateCategoryRequest;
use Vanguard\Repositories\Categories\CategoriesRepository;

class CategoriesController extends Controller
{
    public function __construct(private CategoriesRepository $categories)
    {
        // Allow access to authenticated users only.
        $this->middleware('auth');

        // Allow access to users with 'users.manage' permission.
        $this->middleware('permission:categories.manage');
    }

    public function index(Request $request)
    {
        $categories = $this->categories->paginate($perPage = 20, $request->search);
        return view('categories.index', compact('categories'));
    }
    public function create()
    {
        return view('categories.add-edit', ['edit' => false]);
    }

    /**
     * Store newly created role to database.
     *
     * @param CreateCategoryRequest $request
     * @return mixed
     */
    public function store(CreateCategoryRequest $request)
    {

        $this->categories->create($request->all());

        return redirect()->route('categories.index')
            ->withSuccess(__('Category created successfully.'));
    }

    public function edit(Categories $category)
    {
        return view('categories.add-edit', [
            'category' => $category,
            'edit' => true
        ]);
    }

    /**
     * Update specified role with provided data.
     *
     * @param Categories $category
     * @param UpdateCategoryRequest $request
     * @return mixed
     */
    public function update(Categories $category, UpdateCategoryRequest $request)
    {
        $this->categories->update($category->id, $request->all());
        return redirect()->route('categories.index')
            ->withSuccess(__('Category updated successfully.'));
    }

    /**
     * Remove specified role from system.
     *
     * @param Categories $category

     * @return mixed
     */

    public function destroy(Categories $category)
    {
        $this->categories->delete($category->id);

        Cache::flush();

        return redirect()->route('categories.index')
            ->withSuccess(__('Category deleted successfully.'));
    }

}
