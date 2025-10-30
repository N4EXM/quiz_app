<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizAttemptController;
use App\Http\Controllers\UserProgressController;
use Illuminate\Support\Facades\Route;


// user
// Public auth routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// Public routes
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{id}', [CategoryController::class, 'show']);
Route::get('/quizzes', [QuizController::class, 'index']);
Route::get('/quizzes/category/{categoryId}', [QuizController::class, 'byCategory']);
Route::get('/quizzes/{id}', [QuizController::class, 'show']);

// Protected routes (require authentication)
Route::middleware('auth:sanctum')->group(function () {
    // Auth routes
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    
    // Quiz attempts
    Route::post('/quiz-attempts/start', [QuizAttemptController::class, 'start']);
    Route::post('/quiz-attempts/{attemptId}/answer', [QuizAttemptController::class, 'submitAnswer']);
    Route::post('/quiz-attempts/{attemptId}/complete', [QuizAttemptController::class, 'complete']);
    Route::get('/quiz-attempts/user/{userId}', [QuizAttemptController::class, 'userAttempts']);
    
    // User progress
    Route::get('/user-progress/{userId}', [UserProgressController::class, 'userProgress']);
});