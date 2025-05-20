<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('institutes', function(Blueprint $table){
            $table->unsignedBigInteger('userId')->primary();
            $table->foreign('userId')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::create('teachers', function(Blueprint $table){
            $table->unsignedBigInteger('userId')->primary();
            $table->unsignedBigInteger('instituteId');
            $table->foreign('instituteId')->references('userId')->on('institutes')->onDelete('cascade');
            $table->foreign('userId')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::create('students', function(Blueprint $table){
            $table->unsignedBigInteger('userId')->primary();
            $table->unsignedBigInteger('instituteId');
            $table->foreign('instituteId')->references('userId')->on('institutes')->onDelete('cascade');
            $table->foreign('userId')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::create('courses', function(Blueprint $table){
            $table->unsignedBigInteger('courseId')->primary();
            $table->string('courseName');
            $table->string('courseFeedbackQuestions');
            $table->unsignedBigInteger('teacherId');
            $table->foreign('teacherId')->references('userId')->on('teachers')->onDelete('cascade');
        });
        Schema::create('course_students', function(Blueprint $table){
            $table->unsignedBigInteger('courseId');
            $table->unsignedBigInteger('studentId');
            $table->foreign('courseId')->references('courseId')->on('courses')->onDelete('cascade');
            $table->foreign('studentId')->references('userId')->on('students')->onDelete('cascade');
            $table->primary(['courseId', 'studentId']);
        });
        Schema::create('feedbacks', function(Blueprint $table){
            $table->unsignedBigInteger('courseId');
            $table->foreign('courseId')->references('courseId')->on('courses')->onDelete('cascade');
            $table->string('comment');
            $table->unsignedBigInteger('studentId');
            $table->foreign('studentId')->references('userId')->on('students')->onDelete('cascade');
            $table->primary(['courseId', 'studentId']);
            $table->string('courseFeedbackAnswers');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feedbacks');
        Schema::dropIfExists('course_students');
        Schema::dropIfExists('courses');
        Schema::dropIfExists('students');
        Schema::dropIfExists('teachers');
        Schema::dropIfExists('institutes');
    }
};
