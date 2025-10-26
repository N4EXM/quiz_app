<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\Console\Question\Question;

class Quiz extends Model
{
    use HasFactory;

    protected $primaryKey = 'quiz_id';
    public $timeStamps = true;

    protected $fillable = [
        'title',
        'description',
        'category_id',
        'difficulty',
        'time_limit',
        'max_questions',
        'is_active',
        'created_by'
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    // relationships

    public function category() {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function questions() {
        return $this->hasMany(Question::class, 'quiz_id');
    }

    public function attempts() {
        return $this->hasMany(QuizAttempt::class, 'quiz_id');
    }

    public function creator() {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function favourites() {
        return $this->hasMany(UserFavourite::class, 'quiz_id');
    }

    // scopes
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByDifficulty($query, $difficulty)
    {
        return $query->where('difficulty', $difficulty);
    }

    public function scopeByCategory($query, $categoryId)
    {
        return $query->where('category_id', $categoryId);
    }

}
