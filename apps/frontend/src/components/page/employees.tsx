import { useState, useEffect } from "react";
import EmployeeForm from "./employeeForm";

function Employees() {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then(res => res.json())
      .then(data => {
        const formatted = data.flatMap((dept: any) =>
          dept.employees.map((emp: any) => ({
            firstName: emp.firstName,
            department: dept.name
          }))
        );
        setEmployees(formatted);
      });
  }, []);

  const addEmployee = (employee: any) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div>
      <h2>Employees</h2>
      {["Health Care", "Technology", "Finance"].map((dept) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {employees
              .filter(emp => emp.department === dept && emp.firstName)
              .map(emp => (
                <li key={emp.firstName}>{emp.firstName}</li>
              ))}
          </ul>
        </div>
      ))}

      <EmployeeForm addEmployee={addEmployee} />
    </div>
  );
}

export default Employees;