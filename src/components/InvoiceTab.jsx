import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";

const bills = [
  { id: 1, name: "Bill 1", date: "Nov 1, 2019", amount: "£ 50.59" },
  { id: 2, name: "Bill 2", date: "Nov 1, 2019", amount: "£ 50.59" },
  { id: 3, name: "Bill 3", date: "Nov 1, 2019", amount: "£ 50.59" },
  { id: 4, name: "Bill 4", date: "Nov 1, 2019", amount: "£ 50.59" },
  { id: 5, name: "Bill 5", date: "Nov 1, 2019", amount: "£ 50.59" },
  { id: 6, name: "Bill 6", date: "Nov 1, 2019", amount: "£ 50.59" },
  { id: 7, name: "Bill 7", date: "Nov 1, 2019", amount: "£ 50.59" },
  { id: 8, name: "Bill 8", date: "Nov 1, 2019", amount: "£ 50.59" },
];

const DocumentTabs = () => {
  const [tabIndex, setTabIndex] = useState(1); // Default to "Bills"

  return (
    <Grid
      container
      sx={{ backgroundColor: "white" }}
      px={3}
      borderBottomLeftRadius={"12px"}
      borderBottomRightRadius={"12px"}
    >
      <Box sx={{ width: "100%", maxWidth: 350 }}>
        {/* Tabs */}
        <Box display={"flex"} justifyContent={"space-between"} mb={3}>
          {["All Document", "Bills", "Receipts"].map((label, index) => (
            <Button
              key={label}
              variant={tabIndex === index ? "outlined" : "text"}
              onClick={() => {
                setTabIndex(index);
              }}
              sx={{
                flex: 1,
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: "bold",
                border: tabIndex === index ? "1px solid #ECECF2" : "",
                color: tabIndex === index ? "primary.main" : "#8181A5",
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

        {/* Bills List */}
        {tabIndex === 1 && (
          <Grid container sx={{ width: "350px" }}>
            {bills.map((bill) => (
              <Grid item xs={12} key={bill.id}>
                <Card
                  variant="outlined"
                  sx={{
                    borderTopLeftRadius: bill.id === 1 && "12px",
                    p: 1.5,
                    borderTopRightRadius: bill.id === 1 && "12px",
                    borderBottomLeftRadius: bill.id === 8 && "12px",
                    borderBottomRightRadius: bill.id === 8 && "12px",
                  }}
                >
                  <CardContent sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: bill.id === 1 ? "bold" : "normal",
                          color: bill.id === 1 ? "#6A4BBC" : "#000",
                        }}
                      >
                        {bill.name}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        Date: {bill.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#6A4BBC", fontWeight: 500 }}
                      >
                        {bill.amount}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Grid>
  );
};

export default DocumentTabs;
