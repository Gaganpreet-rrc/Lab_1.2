"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrganization = exports.createOrganization = exports.getOrganization = void 0;
const client_1 = require("../../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
});
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({
    adapter,
});
// getOrganization
const getOrganization = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany({
            include: { role: true }
        });
        res.json(employees);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch organization" });
    }
};
exports.getOrganization = getOrganization;
// createOrganization
const createOrganization = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: "Role name is required" });
        }
        const newRole = await prisma.role.create({
            data: { name },
        });
        res.status(201).json(newRole);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create role" });
    }
};
exports.createOrganization = createOrganization;
// deleteOrganization
const deleteOrganization = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const role = await prisma.role.findUnique({
            where: { id },
            include: { employees: true },
        });
        if (!role) {
            return res.status(404).json({ error: "Role not found" });
        }
        if (role.employees.length > 0) {
            return res.status(400).json({
                error: "Cannot delete role with assigned employees",
            });
        }
        await prisma.role.delete({
            where: { id },
        });
        res.json({ message: "Role deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete role" });
    }
};
exports.deleteOrganization = deleteOrganization;
//# sourceMappingURL=organizationController.js.map