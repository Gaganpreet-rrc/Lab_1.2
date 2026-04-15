import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

// getOrganization
export const getOrganization = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    const skip = (page - 1) * limit;

    const employees = await prisma.employee.findMany({
      skip: skip,
      take: limit,
      include: { role: true },
    });

    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch organization" });
  }
};

// createOrganization
export const createOrganization = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Role name is required" });
    }

    const newRole = await prisma.role.create({
      data: { name },
    });

    res.status(201).json(newRole);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create role" });
  }
};

// deleteOrganization
export const deleteOrganization = async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete role" });
  }
};
