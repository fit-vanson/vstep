<?php

namespace Vanguard\Repositories\Categories;

use Vanguard\Categories;
use Vanguard\Events\Categories\Created;
use Vanguard\Events\Categories\Deleted;
use Vanguard\Events\Categories\Updated;
use Vanguard\Http\Filters\CategoryKeywordSearch;


class EloquentCategories implements CategoriesRepository
{
    /**
     * {@inheritdoc}
     */
    public function all()
    {
        return Categories::all();
    }

    public function paginate($perPage, $search = null)
    {
        $query = Categories::query();

        if ($search) {
            (new CategoryKeywordSearch)($query, $search);
        }

        $result = $query->orderBy('id', 'desc')
            ->paginate($perPage);

        if ($search) {
            $result->appends(['search' => $search]);
        }

        return $result;
    }

    /**
     * {@inheritdoc}
     */
    public function getAllWithUsersCount()
    {

        return Categories::withCount('users')->get();
    }

    /**
     * {@inheritdoc}
     */
    public function getAllWithKhoahocCount()
    {

        return Categories::with('khoahoc')->get();
    }

    /**
     * {@inheritdoc}
     */
    public function find($id)
    {
        return Categories::find($id);
    }

    /**
     * {@inheritdoc}
     */
    public function create(array $data)
    {
        $category = Categories::create($data);
        event(new Created($category));
        return $category;
    }

    /**
     * {@inheritdoc}
     */
    public function update($id, array $data)
    {
        $category = $this->find($id);

        $category->update($data);

        event(new Updated($category));

        return $category;
    }

    /**
     * {@inheritdoc}
     */
    public function delete($id)
    {
        $category = $this->find($id);

        event(new Deleted($category));

        return $category->delete();
    }

    /**
     * {@inheritdoc}
     */
    public function updatePermissions($roleId, array $permissions)
    {
        $role = $this->find($roleId);

        $role->syncPermissions($permissions);
    }

    /**
     * {@inheritdoc}
     */
    public function lists($column = 'cate_name', $key = 'id')
    {
        return Categories::pluck($column, $key);
    }

    /**
     * {@inheritdoc}
     */
    public function findByName($name)
    {
        return Categories::where('cate_name', $name)->first();
    }
}
