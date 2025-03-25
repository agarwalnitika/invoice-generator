import { Publish, Save } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import QBLogo from "./QBLogo";
import PaymentDetails from "./PaymentForm";

const SidebarUI = () => {
  const [tabValue, setTabValue] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <Box sx={{ width: "389px", bgcolor: "white", p: 2, borderRadius: 2 }}>
      {/* Quickbook Header */}
      <Card
        sx={{ mb: 2, p: 2, border: "1px solid #ECECF2", boxShadow: "none" }}
      >
        <Grid
          container
          display={"flex"}
          gap="8px"
          justifyContent={"space-between"}
        >
          <Grid item display={"flex"} gap="8px">
            <Grid>
              <QBLogo />
            </Grid>

            <Grid item>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "16px", fontWeight: 700, color: "#1C1D21" }}
                >
                  Quickbook
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{ color: "#8181A5", fontWeight: 500, fontSize: "12px" }}
                >
                  16 June, 2024
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{ color: "#8181A5", fontWeight: 500, fontSize: "12px" }}
                >
                  8:16 PM
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Box>
              <Typography
                variant="caption"
                sx={{ color: "#8181A5", fontWeight: 700, fontSize: "12px" }}
              >
                Publishing...
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{ color: "#8181A5", fontWeight: 700, fontSize: "12px" }}
              >
                Jimmy Jason
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1,
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  "&.Mui-checked": {
                    color: "#603AE5",
                  },
                }}
              />
            }
            label="Auto-sync"
            sx={{
              "& .MuiTypography-root": {
                fontSize: "16px",
                fontWeight: 500,
                color: "#1C1D21",
              },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  "&.Mui-checked": {
                    color: "#603AE5",
                  },
                }}
              />
            }
            label="Save Config"
            sx={{
              "& .MuiTypography-root": {
                fontSize: "16px",
                fontWeight: 500,
                color: "#1C1D21",
              },
            }}
          />
        </Box>
      </Card>
      {/* Comments */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "24px",
          marginBottom: "16px",
        }}
      >
        {["Comment", "Query"].map((label, index) => (
          <Button
            key={label}
            variant={tabValue === index ? "outlined" : "text"}
            onClick={() => {
              setTabValue(index);
            }}
            sx={{
              flex: 1,
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: "bold",
              border: tabValue === index ? "1px solid #ECECF2" : "",
              color: tabValue === index ? "#1C1D21" : "#8181A5",
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            {label}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          marginLeft: "16px",
          marginRight: "16px",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "#8181A5",
            fontWeight: 700,
            fontSize: "16px",
          }}
        >
          Type Comment
        </Typography>
        <TextField
          value={comment}
          placeholder="Start Typing..."
          onChange={(e) => setComment(e.target.value)}
          autoFocus
          fullWidth
          variant="standard"
          sx={{
            "& .MuiInputBase-root": {
              height: "125px",
              display: "flex",
              alignItems: "flex-start",
            },
          }}
          inputProps={{
            style: {
              fontSize: "14px",
              fontWeight: 400,
              color: "#8181A5",
              "& .MuiInput-underline:before": {
                borderBottomColor: "#D3D3D3",
              },
            },
          }}
        />
      </Box>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        disabled={comment.length === 0}
        sx={{
          mb: 3,
          height: "46px",
          borderRadius: "8px",
          marginTop: "30px",
          textTransform: "none",
        }}
      >
        Add Comment
      </Button>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          mb: 3,
          height: "46px",
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        View Line Items
      </Button>
      <PaymentDetails />

      {/* Actions */}
      <Button variant="contained" fullWidth startIcon={<Save />} sx={{ mb: 2 }}>
        Save
      </Button>
      <Button
        variant="contained"
        fullWidth
        startIcon={<Publish />}
        color="primary"
      >
        Publish
      </Button>
    </Box>
  );
};

export default SidebarUI;
