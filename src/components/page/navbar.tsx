import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <NavLink className="navbar" to="/employees">Employees</NavLink> |{" "}
      <NavLink className="navbar" to="/organization">Organization</NavLink>
    </nav>
  );
}