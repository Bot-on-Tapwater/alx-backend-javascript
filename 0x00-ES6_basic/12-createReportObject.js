export default function createReportObject(employeesList) {
  const allEmployees = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(allEmp) {
      return Object.keys(allEmp).length;
    },
  };

  return allEmployees;
}
