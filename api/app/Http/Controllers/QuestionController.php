<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    /**
     * Get all questions for a specific quiz
     */
    public function byQuiz($quizId)
    {
        $quiz = Quiz::where('is_active', true)->find($quizId);

        if (!$quiz) {
            return response()->json([
                'success' => false,
                'message' => 'Quiz not found'
            ], 404);
        }

        $questions = Question::with(['answers' => function($query) {
            $query->orderBy('answer_order');
        }])
        ->where('quiz_id', $quizId)
        ->orderBy('question_order')
        ->get();

        return response()->json([
            'success' => true,
            'data' => [
                'quiz' => $quiz,
                'questions' => $questions
            ]
        ]);
    }

    /**
     * Get a single question with its answers
     */
    public function show($id)
    {
        $question = Question::with(['answers' => function($query) {
            $query->orderBy('answer_order');
        }])->find($id);

        if (!$question) {
            return response()->json([
                'success' => false,
                'message' => 'Question not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $question
        ]);
    }

    /**
     * Get next question in sequence
     */
    public function nextQuestion($quizId, $currentOrder)
    {
        $nextQuestion = Question::with(['answers' => function($query) {
            $query->orderBy('answer_order');
        }])
        ->where('quiz_id', $quizId)
        ->where('question_order', '>', $currentOrder)
        ->orderBy('question_order')
        ->first();

        if (!$nextQuestion) {
            return response()->json([
                'success' => false,
                'message' => 'No more questions'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $nextQuestion
        ]);
    }
}