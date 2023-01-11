<?php

namespace Vanguard\Repositories\Khoahoc;

use Vanguard\Events\Khoahoc\Created;
use Vanguard\Events\Khoahoc\Deleted;
use Vanguard\Events\Khoahoc\Updated;
use Vanguard\Http\Filters\KhoahocKeywordSearch;
use Vanguard\KhoaHoc;


class EloquentKhoahoc implements KhoahocRepository
{
    /**
     * {@inheritdoc}
     */
    public function all()
    {
        return KhoaHoc::all();
    }

    public function paginate($perPage, $search = null,$cate_id = null)
    {
        $query = KhoaHoc::query();

        if ($cate_id) {
            $query->where('cate_id', $cate_id);
        }

        if ($search) {
            (new KhoahocKeywordSearch)($query, $search);
        }

        $result = $query->orderBy('id', 'desc')
            ->paginate($perPage);

        if ($search) {
            $result->appends(['search' => $search]);
        }

        if ($cate_id) {
            $result->appends(['cate_id' => $cate_id]);
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
    public function find($id)
    {
        return KhoaHoc::find($id);
    }

    /**
     * {@inheritdoc}
     */
    public function create(array $data)
    {
        $khoahoc = KhoaHoc::create($data);
        event(new Created($khoahoc));
        return $khoahoc;
    }

    /**
     * {@inheritdoc}
     */
    public function update($id, array $data)
    {
        $khoahoc = $this->find($id);

        $khoahoc->update($data);

        event(new Updated($khoahoc));

        return $khoahoc;
    }

    /**
     * {@inheritdoc}
     */
    public function delete($id)
    {
        $khoahoc = $this->find($id);

        event(new Deleted($khoahoc));

        return $khoahoc->delete();
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
    public function lists($column = 'khoahoc_name', $key = 'id')
    {
        return KhoaHoc::pluck($column, $key);
    }

    /**
     * {@inheritdoc}
     */
    public function findByName($name)
    {
        return KhoaHoc::where('name', $name)->first();
    }
}
