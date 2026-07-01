import { initialEmployees } from "./data/employees";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import { useState } from "react";
import type { Employee } from "./types/employee";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
function App(){
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  return(
    <div style={{padding:"20px"}}>
      <h1>Employee Management system</h1>
     <EmployeeForm/>

     <EmployeeTable employees={employees} />
    </div>
  );
}
export default App;