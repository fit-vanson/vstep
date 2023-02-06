<?php

namespace Vanguard\Http;

use Alexusmai\LaravelFileManager\Services\ACLService\ACLRepository;

class UsersACLRepository implements ACLRepository
{
    /**
     * Get user ID
     *
     * @return mixed
     */
    public function getUserID()
    {
        return \Auth::id();
    }

    /**
     * Get ACL rules list for user
     *
     * @return array
     */
    public function getRules(): array
    {
        if (\Auth::user()->hasRole('Admin')) {
            $return = [];
            foreach (\Config::get('filesystems.disks') as $disk => $arr) {
                $return[] = ['disk' => $disk, 'path' => '*'.$disk, 'access' => 2];
            }
            return $return;
        }

        return [
            ['disk' => 'uploads', 'path' => '*', 'access' => 0],
        ];
    }
}
