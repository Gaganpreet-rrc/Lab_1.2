import { employeeRepository } from "../repositories/employeeRepository";

export const employeeService = {
  getEmployees() {
    return employeeRepository.getAll();
  }
};