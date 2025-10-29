<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\Category;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function index()
    {
        $quizzes = Quiz::with('category')
            ->where('is_active', true)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $quizzes
        ]);
    }

    public function byCategory($categoryId)
    {
        $quizzes = Quiz::with('category')
            ->where('category_id', $categoryId)
            ->where('is_active', true)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $quizzes
        ]);
    }

    public function show($id)
    {
        $quiz = Quiz::with(['category', 'questions.answers'])
            ->where('is_active', true)
            ->find($id);

        if (!$quiz) {
            return response()->json([
                'success' => false,
                'message' => 'Quiz not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $quiz
        ]);
    }
}