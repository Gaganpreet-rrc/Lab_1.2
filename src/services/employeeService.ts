// I am storing my messages here.
import { employeeRepo } from "../repositories/employeeRepo";

export const employeeService = {
  createEmployee(firstName: string, departmentId: number) {
    if (firstName.length < 3) {
      return { success: false, message: "First name must have at least 3 characters." };
    }

    const departments = employeeRepo.getDepartments();
    const deptExists = departments.some(d => d.id === departmentId);

    if (!deptExists) {
      return { success: false, message: "Department does not exist." };
    }

    const employee = employeeRepo.createEmployee(firstName, departmentId);

    if (!employee) {
      return { success: false, message: "Failed to create an employee." };
    }

    return { success: true, employee };
  },
};
