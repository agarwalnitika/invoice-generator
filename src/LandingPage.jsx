import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SidebarUI from "./components/RightSidebar";
const LandingPage = () => {
  return (
    <Grid container>
      <Sidebar />
      <Header />
      <SidebarUI />
    </Grid>
  );
};

export default LandingPage;
