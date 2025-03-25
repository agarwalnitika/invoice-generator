import React, { useState } from "react";
const Dashboard = () => {
  const [uploadedData, setUploadedData] = useState(null);

  const onSubmit = (data) => {
    console.log("hi ", data);
    setUploadedData(data);
  };
  return (
    <div>
      {/* <EasyUpload setFile={uploadedData} /> */}
      {/* <Invoice file={uploadedData} /> */}
      {/* <FileUploadComponent onSubmit={onSubmit} /> */}
    </div>
  );
};

export default Dashboard;
