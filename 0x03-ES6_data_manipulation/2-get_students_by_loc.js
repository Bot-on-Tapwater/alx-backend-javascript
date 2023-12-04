export default function getStudentsByLocation(studentList, city) {
  const cityList = studentList.filter((obj) => obj.location === city);
  return cityList;
}
