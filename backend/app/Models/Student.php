<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Student extends User
{
    protected $primaryKey = 'userId';
    public $incrementing = false;
    protected $fillable = [
        'userId',
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
    public function courses()
    {
        return $this->belongsToMany(Course::class, 'course_students', 'studentId', 'courseId');
    }
}
