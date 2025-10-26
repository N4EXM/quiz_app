<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Quiz;
use App\Models\Category;
use App\Models\User;

class QuizzesTableSeeder extends Seeder
{
    public function run(): void
    {
        $mathCategory = Category::where('category_name', 'Mathematics')->first();
        $scienceCategory = Category::where('category_name', 'Science')->first();
        $historyCategory = Category::where('category_name', 'History')->first();
        $programmingCategory = Category::where('category_name', 'Programming')->first();
        
        $adminUser = User::where('username', 'admin')->first();

        $quizzes = [
            // Mathematics Quizzes
            [
                'title' => 'Basic Arithmetic',
                'description' => 'Test your fundamental math skills with addition, subtraction, multiplication, and division.',
                'category_id' => $mathCategory->category_id,
                'difficulty' => 'Easy',
                'max_questions' => 10,
                'created_by' => $adminUser->user_id
            ],
            [
                'title' => 'Algebra Fundamentals',
                'description' => 'Solve linear equations and work with variables in this introductory algebra quiz.',
                'category_id' => $mathCategory->category_id,
                'difficulty' => 'Medium',
                'max_questions' => 8,
                'created_by' => $adminUser->user_id
            ],
            [
                'title' => 'Advanced Calculus',
                'description' => 'Challenging problems involving derivatives, integrals, and limits.',
                'category_id' => $mathCategory->category_id,
                'difficulty' => 'Hard',
                'max_questions' => 6,
                'created_by' => $adminUser->user_id
            ],

            // Science Quizzes
            [
                'title' => 'Biology Basics',
                'description' => 'Introduction to cells, organisms, and biological processes.',
                'category_id' => $scienceCategory->category_id,
                'difficulty' => 'Easy',
                'max_questions' => 10,
                'created_by' => $adminUser->user_id
            ],
            [
                'title' => 'Chemistry Elements',
                'description' => 'Test your knowledge of periodic table elements and chemical reactions.',
                'category_id' => $scienceCategory->category_id,
                'difficulty' => 'Medium',
                'max_questions' => 12,
                'created_by' => $adminUser->user_id
            ],

            // History Quizzes
            [
                'title' => 'World War II',
                'description' => 'Key events, battles, and figures from the Second World War.',
                'category_id' => $historyCategory->category_id,
                'difficulty' => 'Medium',
                'max_questions' => 15,
                'created_by' => $adminUser->user_id
            ],

            // Programming Quizzes
            [
                'title' => 'JavaScript Fundamentals',
                'description' => 'Variables, functions, and basic syntax in JavaScript.',
                'category_id' => $programmingCategory->category_id,
                'difficulty' => 'Easy',
                'max_questions' => 10,
                'created_by' => $adminUser->user_id
            ],
            [
                'title' => 'Python Programming',
                'description' => 'Data structures, functions, and object-oriented programming in Python.',
                'category_id' => $programmingCategory->category_id,
                'difficulty' => 'Medium',
                'max_questions' => 12,
                'created_by' => $adminUser->user_id
            ]
        ];

        foreach ($quizzes as $quiz) {
            Quiz::create($quiz);
        }

        $this->command->info('✅ Quizzes seeded successfully!');
    }
}