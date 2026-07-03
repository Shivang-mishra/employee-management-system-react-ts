import { TextField,Button, MenuItem, Card, CardContent, Typography} from "@mui/material";
import { useState } from "react";
interface EmployeeFormProps {
  onSave: (employee: {
    name: string;
    email: string;
    department: string;
  }) => void;
}
function EmployeeForm({onSave}:EmployeeFormProps) {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [department, setDepartment] = useState("");
const [nameError, setNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [departmentError, setDepartmentError] = useState("");

const handleSave=()=>{
  let isValid=true
  if(name.trim()==""){
    setNameError("Name is Riquired");
    isValid=false
  }else{
    if(!isValid) return

    onSave({
      name,email,department,
    })
  }
  if (email.trim() === "") {
  setEmailError("Email is required");
  isValid = false;
} else if (!/\S+@\S+\.\S+/.test(email)) {
  setEmailError("Please enter a valid email");
  isValid = false;
} else {
  setEmailError("");
}
const validDepartments = ["HR", "IT", "Sales"];

if (department === "") {
  setDepartmentError("Please select a department");
  isValid = false;
} else if (!validDepartments.includes(department)) {
  setDepartmentError("Invalid department selected");
  isValid = false;
} else {
  setDepartmentError("");
}
}
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "30px auto",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
<CardContent>
        <Typography variant="h5" gutterBottom>
            Add New Employee
        </Typography>

    <TextField
          label="Name"
          variant="outlined"
            fullWidth
        placeholder="Enter the Name"
          value={name}
  onChange={(e) => setName(e.target.value)}
  error={Boolean(nameError)}
  helperText={nameError}
        />

  <TextField
          label="Email"
            variant="outlined"
          fullWidth
      placeholder="Enter Email"
          sx={{ mt: 2 }}
           value={email}
  onChange={(e) => setEmail(e.target.value)}
   error={Boolean(emailError)}
  helperText={emailError}
       />

            <TextField
          select
          label="Department"
          fullWidth
          sx={{ mt: 2 }}
           value={department}
  onChange={(e) => setDepartment(e.target.value)}
  error={Boolean(departmentError)}
  helperText={departmentError}
        >
             <MenuItem value="HR">HR</MenuItem>
          <MenuItem value="IT">IT</MenuItem>
      <MenuItem value="Sales">Sales</MenuItem>
        </TextField>

       <Button
  variant="contained"
  fullWidth
  sx={{ mt: 2 }}
  onClick={handleSave}>
  Save
</Button>
      </CardContent>
    </Card>
  );
}

export default EmployeeForm;