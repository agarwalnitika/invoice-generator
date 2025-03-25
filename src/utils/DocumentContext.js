import React, { createContext, useState, useContext } from "react";

// Create Context
const DocumentContext = createContext();

// Provider Component
export const DocumentProvider = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]); // Store multiple files

  // Function to add a new file
  const addFile = (file) => {
    setUploadedFiles((prevFiles) => [...prevFiles, file]); // Append new file
  };

  return (
    <DocumentContext.Provider value={{ uploadedFiles, addFile }}>
      {children}
    </DocumentContext.Provider>
  );
};

// Custom Hook for easy access
export const useDocument = () => useContext(DocumentContext);
