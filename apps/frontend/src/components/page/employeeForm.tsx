import { useFormInput } from "../../hooks/useFormInput";
import { employeeService } from "../../services/employeeService";

function EmployeeForm({ onEmployeeAdded }: { onEmployeeAdded: () => void }) {
  const firstName = useFormInput("");
  const departmentId = useFormInput("");

  const submission = (e: React.FormEvent) => {
    e.preventDefault();

    const valid = firstName.validate(value =>
      value.length < 3 ? "First name must be at least 3 characters" : null
    );

    if (!valid) return;

    const result = employeeService.createEmployee(
      firstName.value,
      Number(departmentId.value)
    );

    if (!result.success) {
      firstName.validate(() => result.message);
      return;
    }

    onEmployeeAdded();
    firstName.setValue("");
    departmentId.setValue("");
  };

  return (
    <form onSubmit={submission}>
      <label>Full Name</label>
      <input value={firstName.value} onChange={firstName.onChange} />
      <p className="error">{firstName.message}</p>

      <label>Department ID</label>
      <input value={departmentId.value} onChange={departmentId.onChange} />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
