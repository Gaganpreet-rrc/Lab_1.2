import departmentsData from "../../data/data.json";
import type { Department } from "../../interface/Department";
import ListItem from "./listItems";

const departments: Department[] = departmentsData;

function Main() {
  return (
    <main>
      {departments.map((dept) => (
        <div key={dept.name}>
          <h2>{dept.name}</h2>
          <ul>
            {dept.employees.map((emp) => (
              <ListItem
                key={emp.firstName}
                employee={emp}
              />
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}

export default Main;
