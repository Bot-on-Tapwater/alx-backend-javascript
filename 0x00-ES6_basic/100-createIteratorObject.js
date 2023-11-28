/* eslint-disable no-plusplus */
export default function createIteratorObject(report) {
  let departmentIndex = 0;
  let employeeIndex = 0;

  const iterator = {
    next() {
      const departments = Object.values(report.allEmployees);

      if (departmentIndex < departments.length) {
        const employees = departments[departmentIndex];

        if (employeeIndex < employees.length) {
          const result = { value: employees[employeeIndex], done: false };
          employeeIndex++;
          return result;
        }
        // Move to the next department
        departmentIndex++;
        employeeIndex = 0;
        return this.next(); // Recursive call to move to the next employee
      }

      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };

  return iterator;
}
