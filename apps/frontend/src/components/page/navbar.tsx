import { NavLink } from "react-router-dom";
import { SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";


export function Navbar() {
  return (
    <nav>
      <NavLink className="navbar" to="/employees">Employees</NavLink> |{" "}
      <NavLink className="navbar" to="/organization">Organization</NavLink>
    {" | "}

{/* This is my button section */}
      <SignInButton />
      <SignOutButton />
      <UserButton />
    </nav>
  );
}