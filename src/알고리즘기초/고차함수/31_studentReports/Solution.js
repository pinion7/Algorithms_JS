function studentReports(students) {
  let femaleStudents = students.filter(el => el.gender === 'female');

  let gradesAverage = femaleStudents.map(el => {
    let gradesSum = el.grades.reduce((acc, cur) => {
      return acc + cur;
    });
    return gradesSum / el.grades.length;
  });

  return femaleStudents.map((el) => {
    el.grades = gradesAverage.shift();
    return el;
  });
}





