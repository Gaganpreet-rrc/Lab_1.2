import type { Employee } from "../../interface/Employee";

function ListItem({ employee }: { employee: Employee }) {
  return <li>{employee.firstName} {employee.lastName}</li>;
}

export default ListItem;