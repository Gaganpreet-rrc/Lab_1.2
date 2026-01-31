import { organizationData } from "../../data/organizationData";

function Organization() {
    return (
        <div>
            <h2>Organization</h2>
            
{organizationData.map((people) => (
        <div key={people.id} style={{ display: "flex", gap: "40px" }}>
          <span>
            {people.firstName} {people.lastName}
          </span>
          <span>{people.role}</span>
        </div>
      ))}
    </div>
  );
}

export default Organization;
