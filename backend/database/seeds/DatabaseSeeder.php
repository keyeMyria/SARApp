<?php

use App\Model\Role;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        Role::create([
            'name' => 'Administrator',
        ]);
        Role::create([
            'name' => 'User',
        ]);
        Role::create([
            'name' => 'Employee',
        ]);
    }
}
