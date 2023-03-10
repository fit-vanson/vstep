<?php

namespace Vanguard\Repositories\Baihoc;


use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Vanguard\Baihoc;
use Vanguard\Events\Baihoc\Created;
use Vanguard\Events\Baihoc\Deleted;
use Vanguard\Events\Baihoc\Updated;
use Vanguard\Http\Filters\BaihocKeywordSearch;


class EloquentBaihoc implements BaihocRepository
{
    /**
     * {@inheritdoc}
     */
    public function all()
    {
        return Baihoc::all();
    }

    public function paginate($perPage, $search = null, $khoahoc_id = null)
    {
        $query = Baihoc::query();

        if ($khoahoc_id) {
            $query->where('khoahoc_id', $khoahoc_id);
        }

        if ($search) {
            (new BaihocKeywordSearch)($query, $search);
        }

        $result = $query->orderBy('id', 'desc')
            ->paginate($perPage);

        if ($search) {
            $result->appends(['search' => $search]);
        }

        if ($khoahoc_id) {
            $result->appends(['khoahoc_id' => $khoahoc_id]);
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
        return Baihoc::find($id);
    }

    /**
     * {@inheritdoc}
     */
    public function create(array $data)
    {
        if (isset($data['baihoc_file']) || isset($data['baihoc_pass_zip'])) {
            $data['baihoc_pass_zip'] = str_encrypt($data['baihoc_pass_zip']);
        }
        $baihoc = Baihoc::create($data);
        event(new Created($baihoc));
        return $baihoc;
    }

    /**
     * {@inheritdoc}
     */
    public function update($id, array $data)
    {
        $baihoc = $this->find($id);
        if (isset($data['baihoc_file'])|| isset($data['baihoc_pass_zip'])) {
            $data['baihoc_pass_zip'] = str_encrypt($data['baihoc_pass_zip']);
        }

        $baihoc->update($data);
        event(new Updated($baihoc));

        return $baihoc;
    }

    /**
     * {@inheritdoc}
     */
    public function delete($id)
    {
        $baihoc = $this->find($id);

        event(new Deleted($baihoc));

        return $baihoc->delete();
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
    public function lists($column = 'baihoc_name', $key = 'id')
    {
        return Baihoc::pluck($column, $key);
    }

    /**
     * {@inheritdoc}
     */
    public function findByName($name)
    {
        return Baihoc::where('name', $name)->first();
    }



}
