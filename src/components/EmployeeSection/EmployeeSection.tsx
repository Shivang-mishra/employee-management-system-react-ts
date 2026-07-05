import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";

import "./EmployeeSection.css";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

function EmployeeSection({ search, setSearch }: Props) {
  return (
    <div className="employee-section">

      <div className="employee-title">

        <PersonAddAltOutlinedIcon
          sx={{
            color: "#2563eb",
            fontSize: 34,
          }}
        />

        <h2>Employee List</h2>

      </div>

      <TextField
        size="small"
        placeholder="Search employee by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#94a3b8" }} />
              </InputAdornment>
            ),
          },
        }}
      />

    </div>
  );
}

export default EmployeeSection;