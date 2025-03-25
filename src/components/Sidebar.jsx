import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptIcon from "@mui/icons-material/Receipt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ContactsIcon from "@mui/icons-material/Contacts";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Accounting", icon: <AccountBalanceIcon /> },
    { text: "Banking", icon: <ReceiptIcon /> },
    { text: "Reports", icon: <QueryStatsIcon /> },
    { text: "Contacts", icon: <ContactsIcon /> },
    { text: "Invoicing", icon: <ReceiptIcon /> },
    { text: "Queries", icon: <HelpOutlineIcon /> },
  ];

  return (
    <Box
      sx={{
        width: "80px",
        bgcolor: "#603AE5",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 2,
      }}
    >
      <Box sx={{ mb: 2, fontSize: 24, fontWeight: "bold" }}>
        <Logo />
      </Box>

      <List sx={{ width: "100%" }}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            selected={selectedIndex === index}
            onClick={() => {
              setSelectedIndex(index);
              navigate(item.text.toLowerCase());
            }}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              paddingY: 2,
              color: "#fff",
              bgcolor: selectedIndex === index ? "#6e56cb" : "transparent",
              "&:hover": { bgcolor: "#6e56cb" },
              cursor: "pointer",
              borderLeft: selectedIndex === index && "4px solid white",
            }}
          >
            <ListItemIcon
              sx={{
                justifyContent: "center",
                color: "#fff",
                minWidth: "auto",
                mb: 1,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: 12,
                fontWeight: "bold",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
