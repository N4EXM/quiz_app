<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCategoryProgress extends Model
{
    use HasFactory;

    protected $primaryKey = 'progress_id';
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'category_id',
        'quizzes_completed',
        'total_correct',
        'total_attempted',
        'average_score',
        'last_attempt',
        'mastery_level'
    ];

    protected $casts = [
        'last_attempt' => 'datetime',
        'average_score' => 'decimal:2',
        'quizzes_completed' => 'integer',
        'total_correct' => 'integer',
        'total_attempted' => 'integer'
    ];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    // Calculate success rate
    public function getSuccessRateAttribute()
    {
        if ($this->total_attempted === 0) return 0;
        return round(($this->total_correct / $this->total_attempted) * 100, 2);
    }

    // Update progress when user answers a question
    public function updateProgress($isCorrect)
    {
        $this->total_attempted++;
        if ($isCorrect) {
            $this->total_correct++;
        }
        $this->last_attempt = now();
        $this->save();
    }
}