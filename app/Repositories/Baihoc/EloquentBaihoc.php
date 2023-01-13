<?php

namespace Vanguard\Repositories\Baihoc;


use Illuminate\Support\Facades\Log;
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
        if (isset($data['baihoc_file'])) {
            $path_file = $this->getDestinationDirectory();
            $file = $data['baihoc_file'];
            $extension = $file->getClientOriginalExtension();
            $file_name = uniqid(Str::slug($data['baihoc_name'], '_') . '_') . '.' . $extension;
            $data['baihoc_file'] = $file_name;
            $file->move($path_file, $file_name);
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
        if (isset($data['baihoc_file'])) {
            $path_file = $this->getDestinationDirectory();
            if ($baihoc->baihoc_file) {
                $fileDelete = $path_file . '/' . $baihoc->baihoc_file;
                try {
                    unlink($fileDelete);
                } catch (\Exception $exception) {
                    Log::error('Message: Detele file ' . $exception->getMessage() . '--' . $exception->getLine());
                }
            }
            $file = $data['baihoc_file'];
            $extension = $file->getClientOriginalExtension();
            $file_name = uniqid(Str::slug($data['baihoc_name'], '_') . '_') . '.' . $extension;
            $data['baihoc_file'] = $file_name;
            $file->move($path_file, $file_name);
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

    /**
     * Get destination directory where file should be uploaded.
     *
     * @return string
     */
    private function getDestinationDirectory()
    {
        return public_path('/upload/files');
    }

}
