export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const arrayStudents = studentList.map((element) => {
    let grades;
    for (const obj of newGrades) {
      if (obj.studentId === element.id) {
        grades = obj.grade;
      } else {
        grades = undefined;
      }
    }
    return {
      ...element,
      grade: grades !== undefined ? grades : 'N/A',
    };
  }).filter((obj) => obj.location === city);

  return arrayStudents;
}
