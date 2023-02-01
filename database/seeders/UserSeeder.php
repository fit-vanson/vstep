<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Vanguard\Role;
use Vanguard\Support\Enum\UserStatus;
use Vanguard\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::where('name', 'Admin')->first();

        User::create([
            'first_name' => 'admin',
            'email' => 'admin@vstep.com',
            'username' => 'admin',
            'password' => 'admin@123',
            'avatar' => null,
            'country_id' => null,
            'role_id' => $admin->id,
            'status' => UserStatus::ACTIVE,
            'email_verified_at' => now(),
        ]);

        $manage = Role::where('name', 'Manage')->first();

        User::create([
            'first_name' => 'manage',
            'email' => 'manage@vstep.com',
            'username' => 'manage',
            'password' => 'zxcv@1234',
            'avatar' => null,
            'country_id' => null,
            'role_id' => $manage->id,
            'status' => UserStatus::ACTIVE,
            'email_verified_at' => now(),
        ]);

        $user = Role::where('name', 'User')->first();

        User::create([
            'first_name' => 'user',
            'email' => 'user@vstep.com',
            'username' => 'user',
            'password' => 'zxcv@1234',
            'avatar' => null,
            'country_id' => null,
            'role_id' => $user->id,
            'status' => UserStatus::ACTIVE,
            'email_verified_at' => now(),
        ]);
    }
}
