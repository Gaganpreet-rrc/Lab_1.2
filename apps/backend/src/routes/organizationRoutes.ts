import express from "express";
import { getOrganization, createOrganization, deleteOrganization } from "../controllers/organizationController";

const router = express.Router();

router.get("/", getOrganization);
router.post("/", createOrganization);
router.delete("/:id", deleteOrganization );

export default router;
