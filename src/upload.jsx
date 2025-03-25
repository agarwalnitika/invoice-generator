import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const clients = ["Client 1", "Client 2", "Client 3"];

const EasyUpload = ({ setFile }) => {
  const [selectedClient, setSelectedClient] = useState("");

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0];
      setFile({
        name: uploadedFile.name,
        url: URL.createObjectURL(uploadedFile),
      });
    }
  };

  return (
    <Card
      sx={{ maxWidth: 500, margin: "auto", padding: 2, textAlign: "center" }}
    >
      <CardContent>
        <Typography variant="h6">EasyUpload</Typography>
        <TextField
          select
          label="Select Client"
          fullWidth
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
          margin="normal"
        >
          {clients.map((client) => (
            <MenuItem key={client} value={client}>
              {client}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ border: "2px dashed #aaa", padding: 2, marginY: 2 }}>
          <input
            type="file"
            accept="image/*,.pdf,.csv"
            onChange={handleFileUpload}
            style={{ display: "none" }}
            id="file-upload"
          />
          <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
            <CloudUploadIcon fontSize="large" color="primary" />
            <Typography>Drag & Drop or Choose file to upload</Typography>
          </label>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EasyUpload;
