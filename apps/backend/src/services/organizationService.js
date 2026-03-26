"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationService = void 0;
const organizationRepository_1 = require("../repositories/organizationRepository");
exports.organizationService = {
    getRoles() {
        return organizationRepository_1.organizationRepository.getAll();
    }
};
//# sourceMappingURL=organizationService.js.map