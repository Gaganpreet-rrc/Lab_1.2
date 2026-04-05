import { Routes, Route, Navigate } from "react-router-dom";
import Employees from "./components/page/employees";
import Organization from "./components/page/organization";
import { Layout } from "./components/page/layout";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/employees" />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/organization" element={<Organization />} />
      </Route>
    </Routes>
  );
}

export default App;