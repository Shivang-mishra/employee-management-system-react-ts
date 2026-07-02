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
  return (
    <Card
      sx={{
        maxWidth: 500,
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
        />

  <TextField
          label="Email"
            variant="outlined"
          fullWidth
      placeholder="Enter Email"
          sx={{ mt: 2 }}
           value={email}
  onChange={(e) => setEmail(e.target.value)}
       />

            <TextField
          select
          label="Department"
          fullWidth
          sx={{ mt: 2 }}
           value={department}
  onChange={(e) => setDepartment(e.target.value)}
        >
             <MenuItem value="HR">HR</MenuItem>
          <MenuItem value="IT">IT</MenuItem>
      <MenuItem value="Sales">Sales</MenuItem>
        </TextField>

       <Button
  variant="contained"
  fullWidth
  sx={{ mt: 2 }}
  onClick={() => {
    onSave({
      name,
      email,
      department,
    });
  }}
>
  Save
</Button>
      </CardContent>
    </Card>
  );
}

export default EmployeeForm;