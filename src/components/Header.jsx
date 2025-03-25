import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "white",
      }}
    >
      {/* Left Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#333" }}>
          Review
        </Typography>
        <Select
          defaultValue="Google"
          variant="outlined"
          size="small"
          sx={{
            minWidth: 120,
            height: 35,
            borderRadius: "8px",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#603AE5" },
          }}
        >
          <MenuItem value="Google">Google</MenuItem>
          <MenuItem value="Yelp">Yelp</MenuItem>
        </Select>

        <Button
          sx={{
            backgroundColor: "rgba(64, 225, 250, 0.1)",
            color: "rgba(44, 160, 29, 1)",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "8px",
            padding: "5px 12px",
            fontSize: "14px",
          }}
        >
          Quickbook’s Data
        </Button>
      </Box>

      {/* Right Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton
          sx={{
            color: "#603AE5",
            backgroundColor: "rgba(96, 58, 229, 0.1)",
            borderRadius: "8px",
            fontWeight: 500,
          }}
        >
          <SearchIcon />
        </IconButton>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgba(96, 58, 229, 0.1)",
            color: "#603AE5",
            textTransform: "none",
            borderRadius: "8px",
            fontWeight: 500,
            boxShadow: "none",
          }}
        >
          Export to Excel
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgba(96, 58, 229, 0.1)",
            color: "#603AE5",
            fontWeight: 500,
            textTransform: "none",
            borderRadius: "8px",
            boxShadow: "none",
          }}
        >
          Add Document
        </Button>

        <Button
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
          sx={{
            backgroundColor: "rgba(96, 58, 229, 0.1)",
            color: "#603AE5",
            fontWeight: 500,
            textTransform: "none",
            borderRadius: "8px",
            boxShadow: "none",
          }}
        >
          Connect
        </Button>

        <IconButton
          sx={{
            color: "#603AE5",
            backgroundColor: "rgba(96, 58, 229, 0.1)",
            borderRadius: "8px",
          }}
        >
          <NotificationsNoneIcon />
        </IconButton>

        <IconButton
          sx={{
            color: "#603AE5",
            backgroundColor: "rgba(96, 58, 229, 0.1)",
            borderRadius: "8px",
          }}
        >
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton
          sx={{
            color: "#603AE5",
            backgroundColor: "rgba(96, 58, 229, 0.1)",
            borderRadius: "8px",
          }}
        >
          <PersonOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
