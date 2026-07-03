import { DataGrid,  } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import type { Employee } from "../../types/employee";

interface EmployeeTableProps {
  employees: Employee[]
   onEdit: (employee: Employee) => void;
}
function EmployeeTable({ employees,onEdit }: EmployeeTableProps) {

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

    renderCell: (params:any ) => (
      <>
        <Button variant="contained" size="small"
         onClick={() => onEdit(params.row)}
        >
          Edit
        </Button>

        <Button
          variant="outlined"
          color="error"
          size="small"
          style={{ marginLeft: "10px" }}
           onClick={() => console.log(params.row)}
        >
          Delete
        </Button>
      </>
    ),

  }
];
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