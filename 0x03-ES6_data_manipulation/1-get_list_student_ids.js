export default function getListStudentIds(studentList) {
  if (Array.isArray(studentList)) {
    const idArray = studentList.map((obj) => obj.id);

    return idArray;
  }

  return [];
}
