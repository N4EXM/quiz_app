<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_category_progress', function (Blueprint $table) {
            $table->id('progress_id');
            $table->foreignId('user_id')->constrained('users', 'user_id')->cascadeOnDelete();
            $table->foreignId('category_id')->constrained('categories', 'category_id')->cascadeOnDelete();
            $table->integer('quizzes_completed')->default(0);
            $table->integer('total_correct')->default(0);
            $table->integer('total_attempted')->default(0);
            $table->decimal('average_score', 5, 2)->default(0.00);
            $table->timestamp('last_attempt')->nullable();
            $table->enum('mastery_level', ['Beginner', 'Intermediate', 'Advanced', 'Expert'])->default('Beginner');
            
            $table->unique(['user_id', 'category_id']);
            $table->index(['user_id', 'mastery_level']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_category_progress');
    }
};