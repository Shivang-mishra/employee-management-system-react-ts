import { initialEmployees } from "./data/employees";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import { useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import type { Employee } from "./types/employee";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
function App() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Employee Management System</h1>

        <Button variant="contained" onClick={() =>
          setOpen(true)
        }>
          Add Employee
        </Button>
      </div>

      <EmployeeTable
        employees={employees}
       onEdit={(employee) => {
    setSelectedEmployee(employee);
    setOpen(true);
}}
        
      />
      <Dialog open={open}
        onClose={() => setOpen(false)}>
        <DialogTitle>
          Add Employee
        </DialogTitle>

        <DialogContent>
          <EmployeeForm
            onSave={(employee) => {
              const newEmployee = {
                id: employees.length + 1,
                ...employee,
              };

              setEmployees([...employees, newEmployee]);
              setOpen(false);
            }}
          />

        </DialogContent>


      </Dialog>
    </div>
  );
}
export default App;