import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getEmployees = (req: Request, res: Response) => {
  res.json(employeeService.getEmployees());
};