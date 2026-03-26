"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organizationController_1 = require("../controllers/organizationController");
const router = express_1.default.Router();
router.get("/", organizationController_1.getOrganization);
router.post("/", organizationController_1.createOrganization);
router.delete("/:id", organizationController_1.deleteOrganization);
exports.default = router;
//# sourceMappingURL=organizationRoutes.js.map