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
                'description' => 'Basic arithmetic to advanced calculus',
                'icon' => 'calculator',
                'color' => '#3B82F6'
            ],
            [
                'category_name' => 'Science',
                'description' => 'Physics, chemistry, and biology',
                'icon' => 'flask',
                'color' => '#10B981'
            ],
            [
                'category_name' => 'History',
                'description' => 'World history and historical events',
                'icon' => 'history',
                'color' => '#F59E0B'
            ],
            [
                'category_name' => 'Geography',
                'description' => 'Countries, capitals, and physical features',
                'icon' => 'globe',
                'color' => '#EF4444'
            ],
            [
                'category_name' => 'Programming',
                'description' => 'Coding and computer science concepts',
                'icon' => 'code',
                'color' => '#8B5CF6'
            ],
            [
                'category_name' => 'English',
                'description' => 'Grammar, vocabulary, and literature',
                'icon' => 'book',
                'color' => '#EC4899'
            ],
            [
                'category_name' => 'Arts',
                'description' => 'Visual arts, music, and performing arts',
                'icon' => 'palette',
                'color' => '#06B6D4'
            ]
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }

        $this->command->info('✅ Categories seeded successfully!');
    }
}