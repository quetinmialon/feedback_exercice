export interface User {
    id: number;
    role: 'establishment' | 'student' | 'instructor';
    name: string;
    email: string;
  }
  