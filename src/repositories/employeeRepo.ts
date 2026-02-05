// This is where I am storing my data in employeeRepo file.
type Employee = {
  id: number;
  firstName: string;
  departmentId: number;
};

type Department = {
  id: number;
  name: string;
  employees: Employee[];
};

let departments: Department[] = [
  { id: 1, name: "Heath Care", employees: [] },
  { id: 2, name: "Finance", employees: [] },
  { id: 3, name: "Technology", employees: [] }
];

let employeeId = 1;

export const employeeRepo = {
  getDepartments() {
    return departments;
  },

  createEmployee(firstName: string, departmentId: number) {
    const department = departments.find(d => d.id === departmentId);
    if (!department) return null;

    const employee: Employee = {
      id: employeeId++,
      firstName,
      departmentId,
    };

    department.employees.push(employee);
    return employee;
  },
};
