import { useState, useEffect } from "react";

function Organization() {
  const [organization, setOrganization] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/organization")
      .then(res => res.json())
      .then(data => setOrganization(data));
  }, []);

  return (
    <div>
      <h2>Organization</h2>
      {organization.map((person) => (
        <div key={person.id} style={{ display: "flex", gap: "40px" }}>
          <span>{person.name}</span>
          <span>{person.role?.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Organization;