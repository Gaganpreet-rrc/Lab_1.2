import express from "express";
import { getOrganization } from "../controllers/organizationController";

const router = express.Router();

router.get("/", getOrganization);

export default router;