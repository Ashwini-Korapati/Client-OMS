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
    <div style={{ padding: '20px' }}>
      <h3>Upload Attendance Excel</h3>

      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: '10px' }}>Upload</button>

      <hr style={{ margin: '20px 0' }} />

      <h4>Need a sample template?</h4>
      <a
        href="/Templates/punchData.xlsx"
        download="PunchSample.xlsx"
        style={{
          display: 'inline-block',
          marginTop: '10px',
          padding: '8px 12px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        Download Sample Template
      </a>
    </div>
  );
};

export default UploadAttandence;
