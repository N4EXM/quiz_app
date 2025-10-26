<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_answers', function (Blueprint $table) {
            $table->id('user_answer_id');
            $table->foreignId('attempt_id')->constrained('quiz_attempts', 'attempt_id')->cascadeOnDelete();
            $table->foreignId('question_id')->constrained('questions', 'question_id')->cascadeOnDelete();
            $table->foreignId('answer_id')->nullable()->constrained('answers', 'answer_id')->nullOnDelete();
            $table->text('user_answer_text')->nullable(); // for fill-in-the-blank
            $table->boolean('is_correct')->default(false);
            $table->integer('time_spent')->default(0); // in seconds
            $table->timestamp('answered_at')->useCurrent();
            
            $table->index(['attempt_id', 'question_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_answers');
    }
};