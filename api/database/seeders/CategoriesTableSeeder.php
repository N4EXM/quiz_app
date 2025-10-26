<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesTableSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'category_name' => 'Mathematics',
            ],
            [
                'category_name' => 'Science',
            ],
            [
                'category_name' => 'History',
            ],
            [
                'category_name' => 'Geography',
            ],
            [
                'category_name' => 'Programming',
            ],
            [
                'category_name' => 'English',
            ],
            [
                'category_name' => 'Arts',
            ]
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }

        $this->command->info('✅ Categories seeded successfully!');
    }
}