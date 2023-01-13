<?php

namespace Vanguard\Repositories\Categories;

use Vanguard\Categories;

interface CategoriesRepository
{
    /**
     * Get all system roles.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all();

    public function paginate($perPage, $search = null);

    /**
     * Lists all system roles into $key => $column value pairs.
     *
     * @param string $column
     * @param string $key
     * @return mixed
     */
    public function lists($column = 'cate_name', $key = 'id');

    /**
     * Get all system roles with number of users for each role.
     *
     * @return mixed
     */
    public function getAllWithUsersCount();

    /**
     * Get all system khoá học with number of category .
     *
     * @return mixed
     */
    public function getAllWithKhoahocCount();

    /**
     * Find system role by id.
     *
     * @param $id Categories Id
     * @return Categories|null
     */
    public function find($id);

    /**
     * Find role by name:
     *
     * @param $name
     * @return mixed
     */
    public function findByName($name);

    /**
     * Create new system role.
     *
     * @param array $data
     * @return Categories
     */
    public function create(array $data);

    /**
     * Update specified role.
     *
     * @param $id Categories Id
     * @param array $data
     * @return Categories
     */
    public function update($id, array $data);

    /**
     * Remove role from repository.
     *
     * @param $id Categories Id
     * @return bool
     */
    public function delete($id);

//    /**
//     * Update the permissions for given role.
//     *
//     * @param $roleId
//     * @param array $permissions
//     * @return mixed
//     */
//    public function updatePermissions($roleId, array $permissions);
}
