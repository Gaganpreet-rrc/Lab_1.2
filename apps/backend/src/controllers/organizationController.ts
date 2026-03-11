import { Request, Response } from "express";
import { organizationService } from "../services/organizationService";

export const getOrganization = (req: Request, res: Response) => {
  const roles = organizationService.getRoles();
  res.json(roles);
};