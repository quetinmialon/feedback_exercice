export interface Feedback {
    id: number;
    courseId: number;
    instructorId: number;
    studentId: number;
    responses: number[];
    comment?: string;
    createdAt: Date;
  }
  