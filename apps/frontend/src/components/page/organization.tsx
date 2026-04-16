import { useState, useEffect } from "react";

function Organization() {
  const [organization, setOrganization] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/organization?page=${page}&limit=5`)
      .then(res => res.json())
      .then(data => setOrganization(data));
  }, [page]);

  return (
    <div>
      <h2>Organization</h2>
      {organization.map((person) => (
        <div key={person.id} style={{ display: "flex", gap: "40px" }}>
          <span>{person.name}</span>
          <span>{person.role?.name}</span>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>Page {page}</span>

        <button onClick={() => setPage(page + 1)}
          >
          Next
        </button>
      </div>
    </div>
  );
}

export default Organization;