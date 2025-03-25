import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import DocumentTabs from "../components/InvoiceTab";
import { useDocument } from "../utils/DocumentContext";

const Accounting = () => {
  const { uploadedFiles } = useDocument();
  return (
    <Grid container>
      <Grid
        container
        justifyContent={"flex-end"}
        pt={3}
        mt={"36px"}
        mx={3}
        bgcolor={"white"}
        sx={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            mb: 3,
            height: "46px",
            borderRadius: "8px",
            textTransform: "none",
            width: "180px",
            marginRight: "24px",
          }}
        >
          View Line Items
        </Button>
      </Grid>
      <Grid
        container
        item
        sx={{ padding: "0px 24px 24px 24px", display: "flex" }}
      >
        <Grid item width="50%">
          <DocumentTabs />
        </Grid>
        <Grid
          item
          bgcolor={"white"}
          width={"50%"}
          pr={"24px"}
          display={"flex"}
          alignItems={"flex-start"}
        >
          <Grid
            item
            sx={{
              backgroundColor: "#F6DEBA",
              borderRadius: "12px",
              width: "100%",
            }}
          >
            {/* Middle Panel - Document Preview */}
            <Grid item m={10}>
              <Paper
                sx={{
                  padding: 3,
                  height: "80vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {uploadedFiles && uploadedFiles.length > 0 ? (
                  uploadedFiles.map((file, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>
                      <Typography variant="h6">{file.name}</Typography>
                      {file?.file?.url?.endsWith(".pdf") ? (
                        <iframe
                          src={file.file.url}
                          width="100%"
                          height="500px"
                        />
                      ) : (
                        <img
                          src={file?.file?.url}
                          alt={`Uploaded File ${index + 1}`}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "70vh",
                            marginTop: 10,
                          }}
                        />
                      )}
                    </div>
                  ))
                ) : (
                  <Typography variant="h6">No files uploaded</Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Accounting;
