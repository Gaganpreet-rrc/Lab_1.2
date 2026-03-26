import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

// My getEmployees 
export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await prisma.employee.findMany({
      include: { role: true },
    });
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};

// createEmployee
export const createEmployee = async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create employee" });
  }
};

// deleteEmployee
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await prisma.employee.delete({
      where: { id },
    });

    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete employee" });
  }
};
