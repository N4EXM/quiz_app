<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id("quiz_id");
            $table->string("title", 200);
            $table->string("description") -> nullable();
            $table->foreignId("category_id")->constrained("categories", "category_id");
            $table->enum("difficulty", ["Easy, Medium", "Hard"])->default("Easy");
            $table->integer("max_questions")->default(5);
            $table->boolean("is_active")->default(true);
            $table->foreignId('created_by')->nullable()->constrained('users', 'user_id')->nullOnDelete();
            $table->index(['category_id', 'is_active']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quizzes');
    }
};
