import { organizationRepository } from "../repositories/organizationRepository";

export const organizationService = {
  getRoles() {
    return organizationRepository.getAll();
  }
};