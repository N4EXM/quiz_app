<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $primaryKey = 'answer_id';
    public $timestamps = true;

    protected $fillable = [
        'question_id',
        'answer_text',
        'is_correct',
        'answer_order'
    ];

    protected $casts = [
        'is_correct' => 'boolean',
        'answer_order' => 'integer'
    ];

    // Relationships
    public function question()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }

    public function userAnswers()
    {
        return $this->hasMany(UserAnswer::class, 'answer_id');
    }

    // Scopes
    public function scopeCorrect($query)
    {
        return $query->where('is_correct', true);
    }

    public function scopeInOrder($query)
    {
        return $query->orderBy('answer_order');
    }
}