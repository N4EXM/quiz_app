<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;
use App\Models\Answer;
use App\Models\Quiz;

class QuestionsTableSeeder extends Seeder
{
    public function run(): void
    {
        $basicMathQuiz = Quiz::where('title', 'Basic Arithmetic')->first();

        $questions = [
            [
                'quiz_id' => $basicMathQuiz->quiz_id,
                'question_text' => 'What is 15 + 27?',
                'question_type' => 'multiple_choice',
                'question_order' => 1,
                'points' => 1,
                'explanation' => '15 + 27 = 42'
            ],
            [
                'quiz_id' => $basicMathQuiz->quiz_id,
                'question_text' => 'What is 8 × 7?',
                'question_type' => 'multiple_choice',
                'question_order' => 2,
                'points' => 1,
                'explanation' => '8 × 7 = 56'
            ],
            [
                'quiz_id' => $basicMathQuiz->quiz_id,
                'question_text' => 'What is 144 ÷ 12?',
                'question_type' => 'multiple_choice',
                'question_order' => 3,
                'points' => 1,
                'explanation' => '144 ÷ 12 = 12'
            ]
        ];

        foreach ($questions as $questionData) {
            $question = Question::create($questionData);

            // Add answers based on question
            if ($question->question_text === 'What is 15 + 27?') {
                $this->createAnswers($question->question_id, [
                    ['40', false],
                    ['42', true],
                    ['38', false],
                    ['45', false]
                ]);
            }

            if ($question->question_text === 'What is 8 × 7?') {
                $this->createAnswers($question->question_id, [
                    ['54', false],
                    ['56', true],
                    ['49', false],
                    ['64', false]
                ]);
            }

            if ($question->question_text === 'What is 144 ÷ 12?') {
                $this->createAnswers($question->question_id, [
                    ['10', false],
                    ['11', false],
                    ['12', true],
                    ['13', false]
                ]);
            }
        }

        $this->command->info('✅ Questions and Answers seeded successfully!');
    }

    private function createAnswers($questionId, $answers): void
    {
        $order = 1;
        foreach ($answers as [$text, $isCorrect]) {
            Answer::create([
                'question_id' => $questionId,
                'answer_text' => $text,
                'is_correct' => $isCorrect,
                'answer_order' => $order++
            ]);
        }
    }
}