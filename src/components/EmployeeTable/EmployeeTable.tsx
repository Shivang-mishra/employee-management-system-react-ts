import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import type { Employee } from "../../types/employee";

interface EmployeeTableProps {
  employees: Employee[]
}

const columns = [
  {
    field: "id",
    headerName: "S.No",
    width: 100,
  },
  {
    field: "name",
    headerName: "Name",
    width: 180,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "department",
    headerName: "Department",
    width: 180,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 220,

    renderCell: () => (
      <>
        <Button variant="contained" size="small">
          Edit
        </Button>

        <Button
          variant="outlined"
          color="error"
          size="small"
          style={{ marginLeft: "10px" }}
        >
          Delete
        </Button>
      </>
    ),

  }
];
function EmployeeTable({ employees }: EmployeeTableProps) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={employees}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />

    </div>
  )
}

export default EmployeeTable