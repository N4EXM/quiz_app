<?php

namespace App\Http\Controllers;

use App\Models\UserCategoryProgress;
use App\Models\User;
use Illuminate\Http\Request;

class UserProgressController extends Controller
{
    /**
     * Get user's progress across all categories
     */
    public function userProgress($userId)
    {
        $user = User::find($userId);

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found'
            ], 404);
        }

        $progress = UserCategoryProgress::with('category')
            ->where('user_id', $userId)
            ->get();

        $overallStats = [
            'total_quizzes_completed' => $progress->sum('quizzes_completed'),
            'total_correct_answers' => $user->total_correct_answers,
            'total_wrong_answers' => $user->total_wrong_answers,
            'current_streak' => $user->current_streak,
            'longest_streak' => $user->longest_streak,
            'accuracy_rate' => $user->total_correct_answers + $user->total_wrong_answers > 0 
                ? round(($user->total_correct_answers / ($user->total_correct_answers + $user->total_wrong_answers)) * 100, 2)
                : 0
        ];

        return response()->json([
            'success' => true,
            'data' => [
                'user' => $user,
                'category_progress' => $progress,
                'overall_stats' => $overallStats
            ]
        ]);
    }

    /**
     * Get user's progress for a specific category
     */
    public function categoryProgress($userId, $categoryId)
    {
        $progress = UserCategoryProgress::with('category')
            ->where('user_id', $userId)
            ->where('category_id', $categoryId)
            ->first();

        if (!$progress) {
            return response()->json([
                'success' => false,
                'message' => 'Progress data not found for this category'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $progress
        ]);
    }

    /**
     * Get leaderboard for a category
     */
    public function categoryLeaderboard($categoryId)
    {
        $leaderboard = UserCategoryProgress::with('user')
            ->where('category_id', $categoryId)
            ->where('quizzes_completed', '>', 0)
            ->orderBy('average_score', 'desc')
            ->orderBy('quizzes_completed', 'desc')
            ->limit(10)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $leaderboard
        ]);
    }

    /**
     * Get user's recent quiz activity
     */
    public function recentActivity($userId)
    {
        $recentAttempts = \App\Models\QuizAttempt::with(['quiz.category'])
            ->where('user_id', $userId)
            ->where('is_completed', true)
            ->orderBy('completed_at', 'desc')
            ->limit(10)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $recentAttempts
        ]);
    }
}