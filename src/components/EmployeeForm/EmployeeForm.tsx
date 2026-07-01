import { TextField, Button, MenuItem } from "@mui/material";


function EmployeeForm() {
  return (
    <div>
        <h2>Add Employee</h2>
        <TextField label="Name" variant="outlined" fullWidth placeholder=" Enter The Name" />
        <TextField
  label="Email"
  variant="outlined"
  fullWidth
  sx={{ mt: 2 }}
  placeholder="enter email"
/>

<TextField
  select
  label="Department"
  fullWidth
  sx={{ mt: 2 }}
 
>
  <MenuItem value="HR">HR</MenuItem>
  <MenuItem value="IT">IT</MenuItem>
  <MenuItem value="Sales">Sales</MenuItem>
</TextField>

<Button
  variant="contained"
  fullWidth
  sx={{ mt: 2 }}
>
  Add Employee
</Button>
    </div>
  )
}

export default EmployeeForm