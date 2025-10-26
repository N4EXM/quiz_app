<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizAttempt extends Model
{
    use HasFactory;

    protected $primaryKey = 'attempt_id';
    public $timestamps = false; // We're using custom timestamp fields

    protected $fillable = [
        'user_id',
        'quiz_id',
        'started_at',
        'completed_at',
        'score',
        'total_questions',
        'correct_answers',
        'time_spent',
        'is_completed'
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'completed_at' => 'datetime',
        'is_completed' => 'boolean',
        'score' => 'integer',
        'total_questions' => 'integer',
        'correct_answers' => 'integer',
        'time_spent' => 'integer'
    ];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function quiz()
    {
        return $this->belongsTo(Quiz::class, 'quiz_id');
    }

    public function userAnswers()
    {
        return $this->hasMany(UserAnswer::class, 'attempt_id');
    }

    // Calculate score percentage
    public function getScorePercentageAttribute()
    {
        if ($this->total_questions === 0) return 0;
        return round(($this->correct_answers / $this->total_questions) * 100, 2);
    }

    // Check if attempt is in progress
    public function getIsInProgressAttribute()
    {
        return !$this->is_completed && $this->started_at !== null;
    }

    // Scopes
    public function scopeCompleted($query)
    {
        return $query->where('is_completed', true);
    }

    public function scopeInProgress($query)
    {
        return $query->where('is_completed', false)
                    ->whereNotNull('started_at');
    }

    public function scopeByUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }
}