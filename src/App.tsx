import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Employees from "../src/components/page/employees";
import OrganizationPage from "../src/components/page/organizationPage";
import { Layout } from "./components/page/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/employees" />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/organization" element={<OrganizationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;