function convertScoreToGradeWithPlusAndMinus(score) {
  let grade;
  let plusMinus;
  if (score % 10 >= 8)plusMinus = '+';
  else if (score % 10 <= 2) plusMinus = '-';
  else plusMinus = '';
  
  if (score > 100 || score < 0) return 'INVALID SCORE';
  if (score === 100) return 'A+';
  if (score < 60) return 'F';

  if (score >= 90) grade = 'A';
  else if (score >= 80) grade = 'B';
  else if (score >= 70) grade = 'C';
  else if (score >= 60) grade = 'D';

  return grade + plusMinus;
}


