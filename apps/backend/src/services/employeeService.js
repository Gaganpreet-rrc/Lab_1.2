"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeService = void 0;
const employeeRepository_1 = require("../repositories/employeeRepository");
exports.employeeService = {
    getEmployees() {
        return employeeRepository_1.employeeRepository.getAll();
    }
};
//# sourceMappingURL=employeeService.js.map