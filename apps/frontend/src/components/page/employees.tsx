import { useState, useEffect } from "react";
import EmployeeForm from "./employeeForm";
import { useUser, SignInButton, useAuth } from "@clerk/clerk-react";


function Employees() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/employees?page=${page}&limit=5`)
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
  }, [page]);

const addEmployee = async (employee: any) => {
    try {
      const token = await getToken();
      const roleMap: any = {
      Admin: 9,
      User: 10,
    };

      const res = await fetch(`${API}/employees`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
        name: employee.firstName,
        email: `${employee.firstName}@test.com`,
        roleId: roleMap[employee.department],
      })
      });

      if (res.ok) {
        const data = await res.json();
        setEmployees([...employees, {
          firstName: data.name,
          department: data.role?.name || "Unknown",
        }]);
      } else {
        console.error("Failed to add employee");
      }
    } catch (err) {
      console.error("Error adding employee:", err);
    }
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

      {isSignedIn ? (
        <EmployeeForm addEmployee={addEmployee} />
      ) : (
        <div>
          <p>Please log in to add employees</p>
          <SignInButton mode="redirect" forceRedirectUrl="/" />
        </div>
      )}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>

      <span style={{ margin: "0 10px" }}>Page {page}</span>

      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
      
    </div>
    
      
    </div>
  );
}

export default Employees;
