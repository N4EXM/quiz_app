<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id('question_id');
            $table->foreignId('quiz_id')->constrained('quizzes', 'quiz_id')->cascadeOnDelete();
            $table->text('question_text');
            $table->enum('question_type', ['multiple_choice', 'true_false', 'fill_blank'])->default('multiple_choice');
            $table->integer('question_order');
            $table->integer('points')->default(1);
            $table->text('explanation')->nullable();
            $table->integer('time_limit')->nullable(); // in seconds
            $table->timestamps();
            
            $table->index(['quiz_id', 'question_order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};