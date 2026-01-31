import Paragraph from "../page/paragraph";
import Section from "../page/section";
import '../page/style.css';
import { initialEmployees } from "../../data/data";
import EmployeeForm from "../../components/page/employeeForm";
import { useState } from "react";


function App() {
  // This is my state where I am using flatMap to convert my data into list.
const [employees, setEmployees] = useState(initialEmployees.flatMap(dept =>
    dept.employees.map(emp => ({
      firstName: emp.firstName,
      department: dept.name
    }))
  )
);


const addEmployee = (employee: any) => {
  setEmployees([...employees, employee]);
};


  return (
    <>
    <Paragraph />
    <Section />
{["Health Care", "Technology", "Finance"].map((dept) => (
  <div key={dept}>
    <h2>{dept}</h2>
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
    </>
  );
}

export default App;
