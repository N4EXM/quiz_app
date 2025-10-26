<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            CategoriesTableSeeder::class,
            UsersTableSeeder::class,
            QuizzesTableSeeder::class,
            QuestionsTableSeeder::class,
            // Add more seeders here as you create them
        ]);
    }
}