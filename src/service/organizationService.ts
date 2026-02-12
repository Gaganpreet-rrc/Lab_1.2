import { organizationRepo } from "../repositories/organizationRepo";


export const organizationService = {
  validate(firstName: string, lastName: string, role: string) {
    const errors: { [key: string]: string } = {};

    if (firstName.trim().length < 3) {
      errors.firstName = "First name must be at least 3 characters.";
    }

    if (!lastName.trim()) {
      errors.lastName = "Last name is required.";
    }

    if (!role.trim()) {
      errors.role = "Role is required.";
    }

    if (organizationRepo.roleExists(role)) {
      errors.role = "This role is already assigned to someone.";
    }

    return errors;
  }
};
