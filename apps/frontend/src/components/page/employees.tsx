import { useState, useEffect } from "react";
import EmployeeForm from "./employeeForm";

function Employees() {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        const formatted = data.map((emp: any) => ({
          firstName: emp.name,
          department: emp.role?.name || "Unknown",
        }));
        setEmployees(formatted);
      })
      .catch(err => console.error("Failed to fetch employees:", err));
  }, []);

  const addEmployee = (employee: any) => {
    setEmployees([...employees, employee]);
  };

const departments = [...new Set(employees.map(emp => emp.department))];

  return (
    <div>
      <h2>Employees</h2>
      {departments.map((dept) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {employees
              .filter(emp => emp.department === dept)
              .map((emp, index) => (
                <li key={index}>{emp.firstName}</li>
              ))}
          </ul>
        </div>
      ))}

      <EmployeeForm addEmployee={addEmployee} />
    </div>
  );
}

export default Employees;
