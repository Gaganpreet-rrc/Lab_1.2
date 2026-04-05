import { useState, useEffect } from "react";
import AddPersonForm from "./addPersonForm";
import { useUser, SignInButton, useAuth } from "@clerk/clerk-react";

export default function OrganizationPage() {
  const [people, setPeople] = useState<any[]>([]);
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();

  const loadPeople = async () => {
    try {
      const res = await fetch("http://localhost:3000/organization");
      const data = await res.json();
      setPeople(data);
    } catch (err) {
      console.error("Failed to fetch organization:", err);
    }
  };

  useEffect(() => {
    loadPeople();
  }, []);

  const addPerson = async (person: any) => {
    try {
      const token = await getToken();

      const res = await fetch("http://localhost:3000/organization", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });

      if (res.ok) {
        const newPerson = await res.json();
        setPeople([...people, newPerson]);
      } else {
        console.error("Failed to add person");
      }
    } catch (err) {
      console.error("Error adding person:", err);
    }
  };

  return (
    <div>
      <h1>Organization</h1>

      {isSignedIn ? (
        <AddPersonForm refresh={addPerson} />
      ) : (
        <div>
          <p>Please log in to add people</p>
          <SignInButton />
        </div>
      )}

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