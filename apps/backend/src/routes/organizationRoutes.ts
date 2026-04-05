import express from "express";
import { getOrganization, createOrganization, deleteOrganization } from "../controllers/organizationController";
import { requireAuth  } from "@clerk/express";

const router = express.Router();

router.get("/", getOrganization);
router.post("/", requireAuth (), createOrganization);
router.delete("/:id", requireAuth (), deleteOrganization );

export default router;
