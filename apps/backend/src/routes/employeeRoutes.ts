import express from "express";
import { getEmployees } from "../controllers/employeeController";

const router = express.Router();

router.get("/", getEmployees);

export default router;