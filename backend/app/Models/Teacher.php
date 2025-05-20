<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Teacher extends User
{
    protected $primaryKey = 'userId';
    public $incrementing = false;
    protected $fillable = [
        'userId',
        'instituteId',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'userId');
    }

    public function hasName()
    {
        return $this->user->name;
    }
    public function hasEmail()
    {
        return $this->user->email;
    }
    public function hasPassword()
    {
        return $this->user->password;
    }

    public function institute()
    {
        return $this->belongsTo(Institute::class, 'instituteId');
    }
    public function courses()
    {
        return $this->hasMany(Course::class, 'teacherId');
    }
}
