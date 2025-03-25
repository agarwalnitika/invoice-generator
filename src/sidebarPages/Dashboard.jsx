import { Grid } from "@mui/material";
import React from "react";
import DocumentUploadComponent from "../components/DocumentUpload";

const Dashboard = () => {
  return (
    <Grid container sx={{ marginTop: "50px" }}>
      <DocumentUploadComponent />
    </Grid>
  );
};

export default Dashboard;
