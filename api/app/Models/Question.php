<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $primaryKey = 'question_id';
    public $timeStamps = true;

    protected $fillable = [
        'quiz_id',
        'question_text',
        'question_type',
        'question_order',
        'points',
        'explanation',
        'time_limit'
    ];

    protected $casts = [
        'points' => 'integer',
        'time_limit' => 'integer'
    ];

    // Relationships
    public function quiz()
    {
        return $this->belongsTo(Quiz::class, 'quiz_id');
    }

    public function answers()
    {
        return $this->hasMany(Answer::class, 'question_id');
    }

    public function userAnswers()
    {
        return $this->hasMany(UserAnswer::class, 'question_id');
    }

    // Get correct answers
    public function correctAnswers()
    {
        return $this->answers()->where('is_correct', true);
    }

    // Check if answer is correct
    public function isAnswerCorrect($answerId)
    {
        return $this->answers()
            ->where('answer_id', $answerId)
            ->where('is_correct', true)
            ->exists();
    }

}
