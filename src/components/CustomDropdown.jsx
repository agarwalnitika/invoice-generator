import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

export default function CustomDropdown({ selectedClient, setSelectedClient }) {
  const clients = ["Client 1", "Client 2", "Client 3"];

  return (
    <FormControl fullWidth variant="standard" sx={{ mt: 1 }}>
      {/* Dropdown */}
      <Select
        value={selectedClient}
        onChange={(e) => setSelectedClient(e.target.value)}
        displayEmpty
        sx={{
          mt: 1,
          color: "#78758D",
          fontSize: "14px",
          "& .MuiSelect-icon": {
            color: "#78758D",
          },
          "& .MuiSelect-select": {
            textAlign: "start",
          },
          "&::before": {
            borderBottom: "1px solid #D3D3D3",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "1px solid #78758D",
          },
        }}
      >
        <MenuItem value="" disabled>
          Select Client
        </MenuItem>
        {clients.map((client) => (
          <MenuItem key={client} value={client}>
            {client}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
