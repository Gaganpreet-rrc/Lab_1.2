import type { Person } from "../types/Person";
import { organizationData } from "../data/organizationData";


let people = [...organizationData];
let id = people.length + 1;

export const organizationRepo = {
  getAll() {
    return [...people];
  },

  add(person: Omit<Person, "id">) {
    const newPerson = { id: id++, ...person };
    people.push(newPerson);
  },

  roleExists(role: string) {
    return people.some(p => p.role.toLowerCase() === role.toLowerCase());
  }
};
