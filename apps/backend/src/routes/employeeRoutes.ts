import express from "express";
import { getEmployees, createEmployee, deleteEmployee } from "../controllers/employeeController";
import { requireAuth  } from "@clerk/express";

const router = express.Router();

router.get("/", getEmployees);
router.post("/", requireAuth (), createEmployee);
router.delete("/:id", requireAuth (), deleteEmployee);

export default router;
