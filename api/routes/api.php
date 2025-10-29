<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizAttemptController;
use App\Http\Controllers\UserProgressController;
use Illuminate\Support\Facades\Route;


// user
// ✅ ADD THESE AUTH ROUTES
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// Public routes
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{id}', [CategoryController::class, 'show']);
Route::get('/quizzes', [QuizController::class, 'index']);
Route::get('/quizzes/category/{categoryId}', [QuizController::class, 'byCategory']);
Route::get('/quizzes/{id}', [QuizController::class, 'show']);

// Quiz questions
Route::get('/quizzes/{id}/questions', [QuestionController::class, 'byQuiz']);
Route::get('/questions/{id}', [QuestionController::class, 'show']);
Route::get('/quizzes/{quizId}/next-question/{currentOrder}', [QuestionController::class, 'nextQuestion']);

// Quiz attempts
Route::post('/quiz-attempts/start', [QuizAttemptController::class, 'start']);
Route::post('/quiz-attempts/{attemptId}/answer', [QuizAttemptController::class, 'submitAnswer']);
Route::post('/quiz-attempts/{attemptId}/complete', [QuizAttemptController::class, 'complete']);
Route::get('/quiz-attempts/user/{userId}', [QuizAttemptController::class, 'userAttempts']);
Route::get('/quiz-attempts/{attemptId}', [QuizAttemptController::class, 'show']);

// User progress
Route::get('/user-progress/{userId}', [UserProgressController::class, 'userProgress']);
Route::get('/user-progress/{userId}/category/{categoryId}', [UserProgressController::class, 'categoryProgress']);
Route::get('/user-progress/{userId}/recent-activity', [UserProgressController::class, 'recentActivity']);
Route::get('/leaderboard/category/{categoryId}', [UserProgressController::class, 'categoryLeaderboard']);