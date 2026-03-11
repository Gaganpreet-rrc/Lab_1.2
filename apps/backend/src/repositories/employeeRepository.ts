import { initialEmployees } from "../data/employees";

export const employeeRepository = {
  getAll() {
    return initialEmployees;
  }
};