import { useState } from "react";
import { organizationRepo } from "../repositories/organizationRepo";
import { organizationService } from "../service/organizationService";

export function useAddPerson(refresh: () => void) {
  const [values, setValues] = useState({ firstName: "", lastName: "", role: "" });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: any) => setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validation = organizationService.validate(values.firstName, values.lastName, values.role);
    if (Object.keys(validation).length) return setErrors(validation);

    organizationRepo.add(values);
    refresh();
    setValues({ firstName: "", lastName: "", role: "" });
    setErrors({});
  };

  return { values, errors, handleChange, handleSubmit };
}
