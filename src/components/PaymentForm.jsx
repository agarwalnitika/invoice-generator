import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControlLabel,
  IconButton,
  MenuItem,
  Pagination,
  PaginationItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const PaymentDetails = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => setPage(value);
  const [showPaymentDetails, setShowPaymentDetails] = useState(true);
  const [showDescriptionDetails, setShowDescriptionDetails] = useState(true);

  return (
    <Box sx={{ width: 350, p: 2, bgcolor: "white", borderRadius: 2 }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <IconButton
          sx={{
            color: "#25314C",
            backgroundColor: "#E7E7EE",
            borderRadius: "8px",
          }}
          onClick={() => setPage(1)}
        >
          <ChevronLeft />
        </IconButton>

        <Typography fontWeight={700} fontSize={"16px"} color="#1C1D21">
          Payment Details
        </Typography>
        <IconButton
          sx={{
            color: "#25314C",
            backgroundColor: "#E7E7EE",
            borderRadius: "8px",
          }}
          onClick={() => setPage(2)}
        >
          <ChevronRight />
        </IconButton>
      </Box>
      <Divider />
      {/* Content */}
      {page === 1 && (
        <Box marginTop="24px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography fontWeight={500} fontSize={"16px"} color="#1C1D21">
              Payment Details
            </Typography>
            <IconButton
              sx={{
                color: "#603AE5",
                backgroundColor: "rgba(96, 58, 229, 0.1)",
                borderRadius: "8px",
              }}
              onClick={() => {
                setShowPaymentDetails(!showPaymentDetails);
              }}
            >
              <ChevronLeft
                sx={{
                  transform: showPaymentDetails
                    ? "rotate(90deg)"
                    : "rotate(270deg)",
                }}
              />
            </IconButton>
          </Box>

          {showPaymentDetails && (
            <Box>
              <RadioGroup row>
                <FormControlLabel
                  value="paid"
                  control={<Radio color="primary" />}
                  label="Paid"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#1C1D21",
                    },
                  }}
                />
                <FormControlLabel
                  value="unpaid"
                  control={<Radio />}
                  label="Unpaid"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#1C1D21",
                    },
                  }}
                />
              </RadioGroup>
              <Divider />
              {[
                "Bill Number",
                "Bill Date",
                "Paid Amount",
                "Paid Date",
                "Due Date",
              ].map((label) => (
                <Box key={label} mt={2}>
                  <Typography fontSize={14} fontWeight={400} color="#8181A5">
                    {label}
                  </Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    placeholder="Start Typing"
                    sx={{ mt: 0.5 }}
                    inputProps={{
                      style: {
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#8181A5",
                      },
                    }}
                  />
                </Box>
              ))}
              <Box mt={2}>
                <Typography fontSize={14} fontWeight={400} color="#8181A5">
                  Payment Mode
                </Typography>
                <Select fullWidth variant="standard">
                  <MenuItem value="">Select Payment Mode</MenuItem>
                </Select>
              </Box>
              <Box mt={2}>
                <Typography fontSize={14} fontWeight={400} color="#8181A5">
                  Currency
                </Typography>
                <Select fullWidth variant="standard">
                  <MenuItem value="">Select Currency</MenuItem>
                </Select>
              </Box>
              {[
                "Bank Transaction Ref",
                "Total Amount",
                "Tax Amount",
                "Total Amount (GBP)",
                "Tax Amount (GBP)",
                "FX Rate",
              ].map((label) => (
                <Box key={label} mt={2}>
                  <Typography fontSize={14} fontWeight={400} color="#8181A5">
                    {label}
                  </Typography>
                  <TextField
                    autoFocus
                    fullWidth
                    placeholder="Start Typing"
                    variant="standard"
                    inputProps={{
                      style: {
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#8181A5",
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          )}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
            mt={3}
          >
            <Typography fontWeight={500} fontSize={"16px"} color="#1C1D21">
              Description
            </Typography>
            <IconButton
              sx={{
                color: "#603AE5",
                backgroundColor: "rgba(96, 58, 229, 0.1)",
                borderRadius: "8px",
              }}
              onClick={() => {
                setShowDescriptionDetails(!showDescriptionDetails);
              }}
            >
              <ChevronLeft
                sx={{
                  transform: showDescriptionDetails
                    ? "rotate(90deg)"
                    : "rotate(270deg)",
                }}
              />
            </IconButton>
          </Box>
          {showDescriptionDetails && (
            <Box>
              <RadioGroup row>
                <FormControlLabel
                  value="Single"
                  control={<Radio color="primary" />}
                  label="Single"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#1C1D21",
                    },
                  }}
                />
                <FormControlLabel
                  value="Multiple"
                  control={<Radio />}
                  label="Multiple"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#1C1D21",
                    },
                  }}
                />
              </RadioGroup>
              <Divider />
              <Box marginTop={"16px"}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#8181A5",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  Description
                </Typography>
                <TextField
                  placeholder="Enter Description"
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
            </Box>
          )}
        </Box>
      )}
      {page === 2 && (
        <Box>
          {[
            "Bank Transaction Ref",
            "Total Amount",
            "Tax Amount",
            "Total Amount (GBP)",
            "Tax Amount (GBP)",
            "FX Rate",
          ].map((label) => (
            <Box key={label} mt={2}>
              <Typography fontSize={14} fontWeight={400} color="#8181A5">
                {label}
              </Typography>
              <TextField
                autoFocus
                fullWidth
                placeholder="Start Typing"
                variant="standard"
                sx={{
                  "& .MuiInputBase-root": {
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
          ))}
        </Box>
      )}

      {/* Pagination */}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        px={"12px"}
        py={2}
      >
        <IconButton
          sx={{
            color: "#25314C",
            backgroundColor: "#E7E7EE",
            borderRadius: "8px",
          }}
          onClick={() => setPage(1)}
        >
          <ChevronLeft />
        </IconButton>

        <Stack direction="row" justifyContent="center">
          <Pagination
            count={2}
            page={page}
            onChange={handlePageChange}
            siblingCount={0}
            boundaryCount={0}
            hidePrevButton
            hideNextButton
            renderItem={(item) => (
              <PaginationItem
                {...item}
                component="div"
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: item.selected ? "#603AE5" : "#D3D3D3",
                  marginX: "4px",
                  minWidth: "8px",
                  "&.MuiPaginationItem-page": {
                    fontSize: "0px",
                    width: "10px",
                    height: "10px",
                    "&::before": {
                      content: '""',
                      display: "block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: item.selected ? "#603AE5" : "#D3D3D3",
                    },
                  },
                }}
              />
            )}
          />
        </Stack>
        <IconButton
          sx={{
            color: "#25314C",
            backgroundColor: "#E7E7EE",
            borderRadius: "8px",
          }}
          onClick={() => setPage(2)}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PaymentDetails;
