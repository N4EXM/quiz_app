<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    
    use HasFactory;

    protected $primaryKey = 'category_id';
    public $timeStamps = true;

    protected $fillable = [
        'category_name',
        'is_active',        
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function quizzes() {
        return $this->hasMany(Quiz::class, 'category_id');
    }

    public function userProgress()  {
        return $this->hasMany(UserCategoryProgress::class, 'category_id');
    }

    // scopes
    public function scopeActive($query) {
        return $query->where('is_active', true);
    }


}
