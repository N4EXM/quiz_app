<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\UserAnswer;
use App\Models\UserCategoryProgress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuizAttemptController extends Controller
{
    /**
     * Start a new quiz attempt
     */
    public function start(Request $request)
    {
        $request->validate([
            'quiz_id' => 'required|exists:quizzes,quiz_id',
            'user_id' => 'required|exists:users,user_id'
        ]);

        $quiz = Quiz::with(['questions' => function($query) {
            $query->orderBy('question_order');
        }])->where('is_active', true)->find($request->quiz_id);

        if (!$quiz) {
            return response()->json([
                'success' => false,
                'message' => 'Quiz not found or inactive'
            ], 404);
        }

        // Check if user already has an incomplete attempt
        $existingAttempt = QuizAttempt::where('user_id', $request->user_id)
            ->where('quiz_id', $request->quiz_id)
            ->where('is_completed', false)
            ->first();

        if ($existingAttempt) {
            return response()->json([
                'success' => true,
                'data' => [
                    'attempt_id' => $existingAttempt->attempt_id,
                    'quiz' => $quiz,
                    'resumed' => true
                ]
            ]);
        }

        $attempt = QuizAttempt::create([
            'user_id' => $request->user_id,
            'quiz_id' => $request->quiz_id,
            'total_questions' => $quiz->questions->count(),
            'started_at' => now(),
            'is_completed' => false
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'attempt_id' => $attempt->attempt_id,
                'quiz' => $quiz,
                'resumed' => false
            ]
        ]);
    }

    /**
     * Submit an answer for a question
     */
    public function submitAnswer(Request $request, $attemptId)
    {
        $request->validate([
            'question_id' => 'required|exists:questions,question_id',
            'answer_id' => 'required|exists:answers,answer_id',
            'time_spent' => 'sometimes|integer|min:0'
        ]);

        $attempt = QuizAttempt::find($attemptId);

        if (!$attempt) {
            return response()->json([
                'success' => false,
                'message' => 'Quiz attempt not found'
            ], 404);
        }

        if ($attempt->is_completed) {
            return response()->json([
                'success' => false,
                'message' => 'This quiz attempt is already completed'
            ], 400);
        }

        // Check if answer is correct
        $isCorrect = DB::table('answers')
            ->where('answer_id', $request->answer_id)
            ->where('question_id', $request->question_id)
            ->where('is_correct', true)
            ->exists();

        // Check if user already answered this question
        $existingAnswer = UserAnswer::where('attempt_id', $attemptId)
            ->where('question_id', $request->question_id)
            ->first();

        if ($existingAnswer) {
            // Update existing answer
            $existingAnswer->update([
                'answer_id' => $request->answer_id,
                'is_correct' => $isCorrect,
                'time_spent' => $request->time_spent ?? $existingAnswer->time_spent,
                'answered_at' => now()
            ]);

            $userAnswer = $existingAnswer;
        } else {
            // Create new answer
            $userAnswer = UserAnswer::create([
                'attempt_id' => $attemptId,
                'question_id' => $request->question_id,
                'answer_id' => $request->answer_id,
                'is_correct' => $isCorrect,
                'time_spent' => $request->time_spent ?? 0,
                'answered_at' => now()
            ]);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'is_correct' => $isCorrect,
                'user_answer' => $userAnswer,
                'explanation' => Question::find($request->question_id)->explanation
            ]
        ]);
    }

    /**
     * Complete a quiz attempt and calculate results
     */
    public function complete(Request $request, $attemptId)
    {
        $attempt = QuizAttempt::with('quiz')->find($attemptId);

        if (!$attempt) {
            return response()->json([
                'success' => false,
                'message' => 'Quiz attempt not found'
            ], 404);
        }

        if ($attempt->is_completed) {
            return response()->json([
                'success' => false,
                'message' => 'Quiz attempt already completed'
            ], 400);
        }

        // Calculate results
        $correctAnswers = UserAnswer::where('attempt_id', $attemptId)
            ->where('is_correct', true)
            ->count();

        $totalTime = UserAnswer::where('attempt_id', $attemptId)
            ->sum('time_spent');

        $attempt->update([
            'completed_at' => now(),
            'correct_answers' => $correctAnswers,
            'score' => $correctAnswers,
            'time_spent' => $totalTime,
            'is_completed' => true
        ]);

        // Update user statistics
        $this->updateUserStats($attempt->user_id, $correctAnswers, $attempt->total_questions - $correctAnswers);
        
        // Update category progress
        $this->updateCategoryProgress($attempt->user_id, $attempt->quiz->category_id, $correctAnswers, $attempt->total_questions);

        return response()->json([
            'success' => true,
            'data' => [
                'attempt' => $attempt->load('quiz'),
                'score_percentage' => $attempt->score_percentage,
                'correct_answers' => $correctAnswers,
                'total_questions' => $attempt->total_questions
            ]
        ]);
    }

    /**
     * Get user's quiz attempts
     */
    public function userAttempts($userId)
    {
        $attempts = QuizAttempt::with(['quiz.category'])
            ->where('user_id', $userId)
            ->orderBy('completed_at', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $attempts
        ]);
    }

    /**
     * Get specific attempt details
     */
    public function show($attemptId)
    {
        $attempt = QuizAttempt::with([
            'quiz.category', 
            'userAnswers.question',
            'userAnswers.answer'
        ])->find($attemptId);

        if (!$attempt) {
            return response()->json([
                'success' => false,
                'message' => 'Quiz attempt not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $attempt
        ]);
    }

    /**
     * Update user statistics after quiz completion
     */
    private function updateUserStats($userId, $correct, $wrong)
    {
        $user = \App\Models\User::find($userId);
        $user->total_correct_answers += $correct;
        $user->total_wrong_answers += $wrong;
        
        // Simple streak logic (you can enhance this)
        if ($correct > 0) {
            $user->current_streak += 1;
            $user->longest_streak = max($user->longest_streak, $user->current_streak);
        } else {
            $user->current_streak = 0;
        }
        
        $user->save();
    }

    /**
     * Update category progress
     */
    private function updateCategoryProgress($userId, $categoryId, $correct, $total)
    {
        $progress = UserCategoryProgress::firstOrCreate(
            [
                'user_id' => $userId,
                'category_id' => $categoryId
            ],
            [
                'quizzes_completed' => 0,
                'total_correct' => 0,
                'total_attempted' => 0,
                'average_score' => 0
            ]
        );

        $progress->quizzes_completed += 1;
        $progress->total_correct += $correct;
        $progress->total_attempted += $total;
        $progress->last_attempt = now();
        
        // Calculate average score
        $progress->average_score = ($progress->total_correct / $progress->total_attempted) * 100;
        
        // Update mastery level
        $progress->mastery_level = $this->calculateMasteryLevel($progress->average_score);
        
        $progress->save();
    }

    /**
     * Calculate mastery level based on average score
     */
    private function calculateMasteryLevel($averageScore)
    {
        if ($averageScore >= 90) return 'Expert';
        if ($averageScore >= 75) return 'Advanced';
        if ($averageScore >= 60) return 'Intermediate';
        return 'Beginner';
    }
}