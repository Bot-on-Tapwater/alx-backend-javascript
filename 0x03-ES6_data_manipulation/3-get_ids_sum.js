export default function getStudentIdsSum(studentList) {
  const sumStudents = studentList.reduce((accumulator, obj) => accumulator + obj.id, 0);

  return sumStudents;
}
