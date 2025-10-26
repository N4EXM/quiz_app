<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    public function run(): void
    {
        // Create admin user
        User::create([
            'username' => 'admin',
            'email' => 'admin@quizapp.com',
            'password' => 'password123',
            'first_name' => 'Quiz',
            'last_name' => 'Admin',
            'is_active' => true
        ]);

        // Create regular users
        $users = [
            [
                'username' => 'john_doe',
                'email' => 'john@example.com',
                'password' => 'password123',
                'first_name' => 'John',
                'last_name' => 'Doe',
                'is_active' => true
            ],
            [
                'username' => 'jane_smith',
                'email' => 'jane@example.com',
                'password' => 'password123',
                'first_name' => 'Jane',
                'last_name' => 'Smith',
                'is_active' => true
            ],
            [
                'username' => 'alex_wong',
                'email' => 'alex@example.com',
                'password' => 'password123',
                'first_name' => 'Alex',
                'last_name' => 'Wong',
                'is_active' => true
            ]
        ];

        foreach ($users as $user) {
            User::create($user);
        }

        $this->command->info('✅ Users seeded successfully!');
    }
}