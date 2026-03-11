import { useAddPerson } from "../../hook/useAddPerson";

export default function AddPersonForm({ refresh }: any) {
  const { values, errors, handleChange, handleSubmit } = useAddPerson(refresh);

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" value={values.firstName} onChange={handleChange} />
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <input name="lastName" placeholder="Last Name" value={values.lastName} onChange={handleChange} />
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <input name="role" placeholder="Role" value={values.role} onChange={handleChange} />
      {errors.role && <p className="error">{errors.role}</p>}

      <button type="submit">Add</button>
      <p><li>List of Employees:</li></p>
    </form>
  );
}
