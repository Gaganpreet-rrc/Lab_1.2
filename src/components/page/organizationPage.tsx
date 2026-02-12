import { useState, useEffect } from "react";
import { organizationRepo } from "../../repositories/organizationRepo";
import AddPersonForm from "../page/addPersonForm";

export default function OrganizationPage() {
  const [people, setPeople] = useState<any[]>([]);

  const loadPeople = () => setPeople([...organizationRepo.getAll()]);

  useEffect(loadPeople, []);

  return (
    <div>
      <h1>Organization</h1>
      <AddPersonForm refresh={loadPeople} />
      <ul>
        {people.map(p => (
          <li key={p.id}>
            {p.firstName} {p.lastName} — {p.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
