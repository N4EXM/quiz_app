<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserFavorite extends Model
{
    use HasFactory;

    protected $primaryKey = 'favorite_id';
    public $timestamps = true;

    protected $fillable = [
        'user_id',
        'quiz_id'
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

    // Scopes
    public function scopeByUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }
}