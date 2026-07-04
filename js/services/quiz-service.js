export const gradeQuiz = (questions, answersByQuestionId) => {
  if (!questions.length) {
    return {
      score: 0,
      correct: 0,
      total: 0,
      details: [],
    };
  }

  const details = questions.map((question) => {
    const selectedOptionId = answersByQuestionId[question.id];
    const selectedOption = question.options.find((option) => option.id === selectedOptionId);
    const correctOption = question.options.find((option) => option.isCorrect);

    return {
      questionId: question.id,
      selectedOptionId,
      correctOptionId: correctOption?.id,
      isCorrect: Boolean(selectedOption?.isCorrect),
      explanation: selectedOption?.isCorrect ? question.correctExplanation : selectedOption?.explanation,
    };
  });

  const correct = details.filter((item) => item.isCorrect).length;

  return {
    score: Math.round((correct / questions.length) * 100),
    correct,
    total: questions.length,
    details,
  };
};
