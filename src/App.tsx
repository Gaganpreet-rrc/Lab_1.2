import HeaderH1 from "../src/components/page/header";
import Paragraph from "./components/page/paragraph";
import Footer from "./components/page/footer";
import Section from "./components/page/section";
import './components/page/style.css';
import EmployeeForm from "./components/page/employeeForm";
import { useState } from "react";
import { employeeRepo } from "./repositories/employeeRepo";

function App() {
const [departments, setDepartments] = useState(
    employeeRepo.getDepartments()
  );

  const refreshDepartments = () => {
    setDepartments([...employeeRepo.getDepartments()]);
  };

  return (
    <>
      <HeaderH1 />
      <Paragraph />
      <Section />

      {departments.map(dept => (
        <div key={dept.id}>
          <h2>{dept.name}</h2>
          <ul>
            {dept.employees.map(emp => (
              <li key={emp.id}>{emp.firstName}</li>
            ))}
          </ul>
        </div>
      ))}

      <EmployeeForm onEmployeeAdded={refreshDepartments} />

      <Footer />
    </>
  );
}

export default App;