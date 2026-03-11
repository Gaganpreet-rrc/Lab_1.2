import { useState } from "react";

function EmployeeForm({ addEmployee }: any) {
  const [firstName, setFirstName] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");

  const submission = (e: any) => {
    e.preventDefault();
    setError("");

    if (firstName.length < 3) {
      setError("First name must be at least 3 characters");
      return;
    }

    if (!department) {
      setError("Please select a department");
      return;
    }

    addEmployee({ firstName, department });

    setFirstName("");
    setDepartment("");
  };

  return (
    <form onSubmit={submission}>
      <label>First Name:</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label>    Department:</label>
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select Department</option>
        <option value="Health Care">Health Care</option>
        <option value="Technology">Technology</option>
        <option value="Finance">Finance</option>
      </select>

      <button type="submit">Add Employee</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default EmployeeForm;