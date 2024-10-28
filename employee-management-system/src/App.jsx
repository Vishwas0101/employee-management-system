import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <EmployeeDashboard />
      </div>
    </>
  );
}

export default App;