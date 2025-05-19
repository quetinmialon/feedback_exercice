export const mockFeedbacks = [
    {
      id: 1,
      courseId: 101,
      courseName: "Introduction à la programmation",
      instructorId: 201,
      instructorName: "John Doe",
      description: "Feedback pour le module d'introduction à la programmation.",
      date: "2025-05-19",
      responses: [
        { questionId: 1, rating: 4 },
        { questionId: 2, rating: 5 },
        { questionId: 3, rating: 3 },
      ],
      comments: ["Très bon cours", "Le professeur explique bien"],
    },
    {
      id: 2,
      courseId: 102,
      courseName: "Algorithmique avancée",
      instructorId: 202,
      instructorName: "Jane Smith",
      description: "Feedback pour le module d'algorithmique avancée.",
      date: "2025-05-18",
      responses: [
        { questionId: 1, rating: 5 },
        { questionId: 2, rating: 4 },
        { questionId: 3, rating: 4 },
      ],
      comments: ["Très technique, mais bien expliqué"],
    },
  ];
  