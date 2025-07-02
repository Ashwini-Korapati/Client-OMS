import React, { useState } from 'react';
import axios from 'axios';

const UploadAttandence = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:8000/api/v1/hr/updateAttendanceExel', formData);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Error uploading file");
    }
  };

  return (
    <div>
      <h3>Upload Attendance Excel</h3>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadAttandence;
