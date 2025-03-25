import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CustomDropdown from "./CustomDropdown";
import { useDocument } from "../utils/DocumentContext";

const DocumentUploadComponent = () => {
  const { addFile } = useDocument();
  const [tabValue, setTabValue] = useState(1);
  const [documentOwner, setDocumentOwner] = useState("Accountant 01");
  const [selectedClient, setSelectedClient] = useState("");
  const [fileType, setFileType] = useState("Receipts");

  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0];
      setFile({
        name: uploadedFile.name,
        url: URL.createObjectURL(uploadedFile),
      });
    }
  };

  const handleSubmit = () => {
    addFile({
      documentOwner,
      selectedClient,
      file,
      fileType,
    });
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 500, mx: "auto" }}>
      {/* Header with Tabs */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginBottom={"16px"}
      >
        <Box>
          <Typography
            variant="caption"
            sx={{
              mb: "5px",
              display: "flex",
              fontSize: "14px",
              justifyContent: "flex-start",
              fontWeight: 700,
            }}
          >
            EasyUpload
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {["Bills", "Receipts", "Bank"].map((label, index) => (
            <Button
              key={label}
              variant={tabValue === index ? "outlined" : "text"}
              onClick={() => {
                setTabValue(index);
                setFileType(label);
              }}
              sx={{
                flex: 1,
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: "bold",
                border: tabValue === index ? "1px solid #ECECF2" : "",
                color: tabValue === index ? "primary.main" : "#8181A5",
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
      </Box>

      {/* Document Owner & Client Selection */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              mb: "5px",
              display: "flex",
              fontSize: "14px",
              justifyContent: "flex-start",
            }}
          >
            Document Owner
          </Typography>

          <TextField
            value={documentOwner}
            onChange={(e) => setDocumentOwner(e.target.value)}
            autoFocus
            fullWidth
            variant="standard"
            inputProps={{
              style: {
                fontSize: "14px",
                fontWeight: 700,
                color: "#000",
                marginTop: "16px",
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#D3D3D3",
                },
              },
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              mb: "5px",
              display: "flex",
              fontSize: "14px",
              justifyContent: "flex-start",
              fontWeight: 600,
            }}
          >
            Client
          </Typography>

          <CustomDropdown
            setSelectedClient={setSelectedClient}
            selectedClient={selectedClient}
          />
        </Box>
      </Box>

      {/* File Upload Section */}
      <Box
        sx={{
          border: "2px dashed #E2E2E2",
          borderRadius: 2,
          textAlign: "center",
          p: 3,
          my: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            borderRadius: "12px",
            textAlign: "center",
            width: "72px",
            height: "72px",
            backgroundColor: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => fileInputRef.current.click()}
        >
          <IconButton
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <CloudUploadIcon fontSize="large" />
          </IconButton>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </Box>
        <Box>
          <Typography
            variant="body2"
            color="primary"
            sx={{ fontWeight: "bold", mt: 1 }}
          >
            {file ? file.name : "Drag & Drop or Choose file to upload"}
          </Typography>
          {!file && (
            <Typography
              variant="caption"
              color="primary"
              display="block"
              sx={{ mt: 1 }}
            >
              JPG, PNG, PDF, CVS
            </Typography>
          )}
        </Box>
      </Box>

      {/* Add Receipt Button */}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{
          mb: 3,
          width: "198px",
          height: "46px",
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        Add Receipt
      </Button>

      {/* Email Section */}
      <Typography
        variant="caption"
        sx={{ mb: "5px", display: "flex", fontSize: "14px" }}
      >
        Send Over Email
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        mb={"5px"}
      >
        <Typography
          variant="body2"
          sx={{
            marginRight: "4px",
            color: "#1C1D21",
            fontWeight: 700,
          }}
        >
          Single:
        </Typography>
        <Typography variant="body2" color="primary">
          abc.single@gmail.com
        </Typography>
        <IconButton
          size="small"
          onClick={() => copyToClipboard("abc.single@gmail.com")}
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="flex-start">
        <Typography
          variant="body2"
          color="primary"
          sx={{
            marginRight: "4px",
            color: "#1C1D21",
            fontWeight: 700,
          }}
        >
          Multiple:
        </Typography>
        <Typography variant="body2" color="primary">
          abc.multiple@gmail.com
        </Typography>
        <IconButton
          size="small"
          onClick={() => copyToClipboard("abc.mutiple@gmail.com")}
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default DocumentUploadComponent;
