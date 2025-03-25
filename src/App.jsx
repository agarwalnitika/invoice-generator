import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Box, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Accounting from "./sidebarPages/Accounting";
import Dashboard from "./sidebarPages/Dashboard";
import SidebarUI from "./components/RightSidebar";
import { theme } from "./theme";
import { DocumentProvider } from "./utils/DocumentContext";

const App = () => {
  return (
    <DocumentProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <div style={{ display: "flex", backgroundColor: "#F5F5FA" }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1 }}>
              <Header />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/accounting" element={<Accounting />} />
              </Routes>
            </Box>
            <SidebarUI />
          </div>
        </Router>
      </ThemeProvider>
    </DocumentProvider>
  );
};

export default App;
