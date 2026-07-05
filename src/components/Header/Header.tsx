import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";

import "./Header.css";

interface HeaderProps {
  onAdd: () => void;
}

function Header({ onAdd }: HeaderProps) {
  return (
    <div className="header-card">
      <div className="header-left">
        <div className="header-icon">
          <Groups2OutlinedIcon
            sx={{
              color: "#2563eb",
              fontSize: 34,
            }}
          />
        </div>

        <h1>Employee Management System</h1>
      </div>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        className="add-btn"
        onClick={onAdd}
      >
        Add Employee
      </Button>
    </div>
  );
}

export default Header;