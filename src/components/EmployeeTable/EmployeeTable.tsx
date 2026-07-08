import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Avatar, Box, Button, Chip } from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import type { Employee } from "../../types/employee";

import "./EmployeeTable.css";

interface EmployeeTableProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

function EmployeeTable({
  employees,
  onEdit,
  onDelete,
}: EmployeeTableProps) {

  const columns: GridColDef[] = [
{
  field: "serial",
  headerName: "S.NO",
  width: 80,
  sortable: false,

  renderCell: (params) => {
    return employees.findIndex(
      (emp) => emp.id === params.row.id
    ) + 1;
  },
},

    {
      field: "name",
      headerName: "Name",
      flex: 1.3,

      renderCell: (params) => (

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <Avatar
            sx={{
              width: 44,
              height: 44,
              bgcolor: "#EEF4FF",
              color: "#2563EB",
              fontWeight: 700,
            }}
          >
            {params.row.name.charAt(0).toUpperCase()}
          </Avatar>

          {params.row.name}

        </Box>

      ),
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
    },

    {
      field: "department",
      headerName: "Department",
      width: 180,

      renderCell: (params) => {

        let bg = "#E5E7EB";
        let color = "#374151";

        switch (params.value) {

          case "IT":
            bg = "#DCFCE7";
            color = "#16A34A";
            break;

          case "HR":
            bg = "#DBEAFE";
            color = "#2563EB";
            break;

          case "Sales":
            bg = "#FEF3C7";
            color = "#D97706";
            break;

          case "Support":
            bg = "#F3E8FF";
            color = "#9333EA";
            break;
        }

        return (

          <Chip
            label={params.value}
            sx={{
              bgcolor: bg,
              color,
              fontWeight: 700,
              borderRadius: "8px",
              minWidth: 78,
            }}
          />

        );
      },
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 220,
      sortable: false,
      filterable: false,

      renderCell: (params) => (

        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            startIcon={<EditOutlinedIcon />}
            onClick={() => onEdit(params.row)}
          >
            Edit
          </Button>

          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteOutlineOutlinedIcon />}
            onClick={() => onDelete(params.row.id)}
          >
            Delete
          </Button>
        </Box>

      ),
    },
  ];

return (
  <div className="employee-table">
    <DataGrid
      rows={employees}
      columns={columns}
      pageSizeOptions={[5]}
      disableRowSelectionOnClick
      hideFooterSelectedRowCount
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
        localeText={{
    noRowsLabel: "No Employee Found",
  }}
    />
  </div>
);
}

export default EmployeeTable;