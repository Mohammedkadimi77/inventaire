<?php

namespace Database\Seeders;

use App\Models\equipments;
use App\Models\requests;
use App\Models\tickets;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'mohammed',
            'email' => 'mohammed@gmail.com',
            'password' => Hash::make('12345678'),
            'role' => 'admin',
        ]);

        equipments::factory(100)->create();
        requests::factory(90)->create();
        tickets::factory(100)->create();

    }
}
