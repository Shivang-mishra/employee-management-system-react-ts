import { useState, useEffect } from "react";

import {Dialog,DialogContent,DialogTitle,DialogActions,Button,Snackbar,Alert,IconButton,} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

import Header from "./components/Header/Header";
import EmployeeSection from "./components/EmployeeSection/EmployeeSection";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";

import { initialEmployees } from "./data/employees";
import type { Employee } from "./types/employee";

import "./styles/App.css";

function App() {
  const [employees, setEmployees] = useState<Employee[]>(() => {
    const savedEmployees = localStorage.getItem("employees");

    if (savedEmployees) {
      return JSON.parse(savedEmployees);
    }

    return initialEmployees;
  });

  const [open, setOpen] = useState(false);

  const [selectedEmployee, setSelectedEmployee] =
    useState<Employee | null>(null);

  const [deleteId, setDeleteId] =
    useState<number | null>(null);

  const [search, setSearch] = useState("");

  const [snackbarOpen, setSnackbarOpen] =
    useState(false);

  const [snackbarMessage, setSnackbarMessage] =
    useState("");

  const [snackbarSeverity, setSnackbarSeverity] =
    useState<"success" | "error" | "info">(
      "success"
    );

  useEffect(() => {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }, [employees]);

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      emp.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      emp.department
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const handleAddEmployee = () => {
    setSelectedEmployee(null);
    setOpen(true);
  };

  const handleEditEmployee = (
    employee: Employee
  ) => {
    setSelectedEmployee(employee);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEmployee(null);
  };

  const handleDeleteEmployee = (id: number) => {
    const updatedEmployees = employees.filter(
      (emp) => emp.id !== id
    );

    setEmployees(updatedEmployees);

    setSnackbarMessage(
      "Employee Deleted Successfully"
    );

    setSnackbarSeverity("error");

    setSnackbarOpen(true);
  };

  const handleSaveEmployee = (employee: {
    name: string;
    email: string;
    department: string;
  }) => {
    if (selectedEmployee) {
      const updatedEmployees = employees.map(
        (emp) =>
          emp.id === selectedEmployee.id
            ? {
                ...emp,
                ...employee,
              }
            : emp
      );

      setEmployees(updatedEmployees);

      setSnackbarMessage(
        "Employee Updated Successfully"
      );

      setSnackbarSeverity("info");
    } else {
      const newEmployee = {
  id:
    employees.length > 0
      ? Math.max(...employees.map((emp) => emp.id)) + 1
      : 1,
  ...employee,
};
      setEmployees([
        ...employees,
        newEmployee,
      ]);

      setSnackbarMessage(
        "Employee Added Successfully"
      );

      setSnackbarSeverity("success");
    }

    setSnackbarOpen(true);

    handleClose();
  };
    return (
    <div className="app-container">

      {/* Header */}
      <Header onAdd={handleAddEmployee} />

      {/* Employee List + Search + Table */}
      <div className="table-card">

        <EmployeeSection
          search={search}
          setSearch={setSearch}
        />

        <EmployeeTable
          employees={filteredEmployees}
          onEdit={handleEditEmployee}
          onDelete={(id) => setDeleteId(id)}
        />

      </div>

      {/* Add / Edit Employee Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 4,
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          {selectedEmployee
            ? "Edit Employee"
            : "Add Employee"}

          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>

          <EmployeeForm
            employee={selectedEmployee}
            onSave={handleSaveEmployee}
            onCancel={handleClose}
          />

        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteId !== null}
        onClose={() => setDeleteId(null)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          Delete Employee
        </DialogTitle>

        <DialogContent>
          Are you sure you want to delete this employee?
        </DialogContent>

        <DialogActions>

          <Button
            onClick={() => setDeleteId(null)}
          >
            Cancel
          </Button>

          <Button
            color="error"
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={() => {
              if (deleteId !== null) {
                handleDeleteEmployee(deleteId);
                setDeleteId(null);
              }
            }}
          >
            Delete
          </Button>

        </DialogActions>

      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          severity={snackbarSeverity}
          variant="filled"
          onClose={() => setSnackbarOpen(false)}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

    </div>
  );
}

export default App;