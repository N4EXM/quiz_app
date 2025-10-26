<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PhpParser\Node\Stmt\Return_;


class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    protected $primaryKey = "user_id";
    public $timeStamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */

    protected $fillable = [
        'username',
        'email',
        'password',
        'first_name',
        'last_name',
        'is_active'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_active' => 'boolean',
            'last_login' => 'datetime'
        ];
    }

    // relationships
    public function quizAttempts() {
        return $this->hasMany(QuizAttempt::class, 'user_id');
    }

    public function createdQuizzes() {
        return $this->hasMany(Quiz::class, 'created_by');
    }

    public function favourites() {
        return $this->hasMany(UserFavourite::class, 'user_id');
    }

    public function categoryProgress()  {
        return $this->hasMany(UserCategoryProgress::class, "user_id");
    }

    public function scopeActive($query) {
        return $query->where("is_active", true);
    }

}
