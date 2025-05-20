<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $primaryKey = 'courseId';

    protected $fillable = [
        'courseName',
        'courseFeedbackQuestions',
        'teacherId',
    ];

    public function teacher()
    {
        return $this->belongsTo(Teacher::class, 'teacherId');
    }

    public function students()
    {
        return $this->belongsToMany(Student::class, 'course_students', 'courseId', 'studentId');
    }

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class, 'courseId');
    }
}
