import {
  Box,
  Button,
  MenuItem,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import type { Employee } from "../../types/employee";

interface EmployeeFormProps {
  employee: Employee | null;
  onSave: (employee: {
    name: string;
    email: string;
    department: string;
  }) => void;
  onCancel: () => void;
}

function EmployeeForm({
  employee,
  onSave,
  onCancel,
}: EmployeeFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [departmentError, setDepartmentError] = useState("");

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setEmail(employee.email);
      setDepartment(employee.department);
    } else {
      setName("");
      setEmail("");
      setDepartment("");
    }

    setNameError("");
    setEmailError("");
    setDepartmentError("");
  }, [employee]);

  const handleSave = () => {
    let valid = true;

    
    if (name.trim() === "") {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

   
    if (email.trim() === "") {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter a valid email");
      valid = false;
    } else {
      setEmailError("");
    }

    
    if (department === "") {
      setDepartmentError("Please select a department");
      valid = false;
    } else {
      setDepartmentError("");
    }

    if (!valid) return;

    onSave({
      name: name.trim(),
      email: email.trim(),
      department,
    });
  };

  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        label="Employee Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={Boolean(nameError)}
        helperText={nameError}
      />

      <TextField
        label="Email Address"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={Boolean(emailError)}
        helperText={emailError}
      />

      <TextField
        select
        label="Department"
        fullWidth
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        error={Boolean(departmentError)}
        helperText={departmentError}
      >
        <MenuItem value="IT">IT</MenuItem>
        <MenuItem value="HR">HR</MenuItem>
        <MenuItem value="Sales">Sales</MenuItem>
        <MenuItem value="Support">Support</MenuItem>
      </TextField>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 2,
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          onClick={onCancel}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            minWidth: 110,
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            minWidth: 110,
          }}
        >
          {employee ? "Update" : "Save"}
        </Button>
      </Box>
    </Box>
  );
}

export default EmployeeForm;