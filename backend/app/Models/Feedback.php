<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    // No auto-incrementing primary key, composite key instead
    public $incrementing = false;
    protected $primaryKey = ['courseId', 'studentId'];
    protected $keyType = 'integer'; // or 'int' if both are integers

    protected $table = 'feedbacks';

    protected $fillable = [
        'courseId',
        'studentId',
        'comment',
        'courseFeedbackAnswers',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class, 'courseId', 'courseId');
    }

    public function student()
    {
        return $this->belongsTo(Student::class, 'userId', 'studentId');
    }
}
