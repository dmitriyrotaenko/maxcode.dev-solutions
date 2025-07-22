// https://maxcode.dev/problems/check-the-exam/

function checkExam(correctAnswers, studentAnswers) {
  const studentPoints = studentAnswers.reduce((points, answer, i) => {
    if(answer.length === 0) return points;
    if(answer === correctAnswers[i]) return points += 4;
    if(answer !== correctAnswers[i]) return points -= 1;
  }, 0);

  return studentPoints > 0 ? studentPoints : Math.max(0, studentPoints);
}


console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]))