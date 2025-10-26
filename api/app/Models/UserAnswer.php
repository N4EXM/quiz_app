<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAnswer extends Model
{
    use HasFactory;

    protected $primaryKey = 'user_answer_id';
    public $timestamps = false; // We're using answered_at

    protected $fillable = [
        'attempt_id',
        'question_id',
        'answer_id',
        'user_answer_text',
        'is_correct',
        'time_spent',
        'answered_at'
    ];

    protected $casts = [
        'is_correct' => 'boolean',
        'time_spent' => 'integer',
        'answered_at' => 'datetime'
    ];

    // Relationships
    public function attempt()
    {
        return $this->belongsTo(QuizAttempt::class, 'attempt_id');
    }

    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }

    public function answer()
    {
        return $this->belongsTo(Answer::class, 'answer_id');
    }

    public function user()
    {
        return $this->through('attempt')->has('user');
    }
}