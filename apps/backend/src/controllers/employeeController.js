"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.createEmployee = exports.getEmployees = void 0;
const client_js_1 = require("../../generated/prisma/client.js");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
});
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_js_1.PrismaClient({
    adapter,
});
// My getEmployees 
const getEmployees = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany({
            include: { role: true },
        });
        res.json(employees);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch employees" });
    }
};
exports.getEmployees = getEmployees;
// createEmployee
const createEmployee = async (req, res) => {
    try {
        const { name, email, roleId } = req.body;
        const newEmployee = await prisma.employee.create({
            data: {
                name,
                email,
                roleId: Number(roleId),
            },
        });
        res.status(201).json(newEmployee);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create employee" });
    }
};
exports.createEmployee = createEmployee;
// deleteEmployee
const deleteEmployee = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma.employee.delete({
            where: { id },
        });
        res.json({ message: "Employee deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete employee" });
    }
};
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=employeeController.js.map