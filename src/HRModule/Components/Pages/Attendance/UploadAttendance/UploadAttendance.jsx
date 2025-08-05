import { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UploadAttendance.css';
import { httpUpload } from '../../../../../Httphandler' // update the path if needed

const UploadAttendance = () => {
  const [upload, setUpload] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const resetForm = () => {
    setUpload(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
    ];

    if (!validTypes.includes(file.type)) {
      toast.error('Please upload only Excel files (.xlsx or .xls)');
      resetForm();
      return;
    }

    setUpload(file);
  };

  const handleUpload = async () => {
    if (!upload) {
      toast.warning('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('upload', upload);
    setIsUploading(true);

    try {
      const res = await httpUpload('/api/v1/hr/updateAttendanceExel', formData);

      if (res.data?.success) {
        toast.success(res.data.message || 'File uploaded successfully!');
        resetForm();
      } else {
        throw new Error(res.data.message || 'Upload failed');
      }
    } catch (err) {
      console.error('Upload Error:', err);
      toast.error(err.response?.data?.message || 'Failed to upload attendance data');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-attendance-container">
      <div className="upload-attendance-card">
        <h2 className="upload-title">Upload Attendance Excel</h2>

        <div className="upload-form">
          <div className="form-group">
            <label htmlFor="fileInput" className="file-label">Choose Excel File</label>
            <input
              ref={fileInputRef}
              id="fileInput"
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              className="file-input"
            />
            {upload && (
              <div className="file-info">
                Selected file: <span className="file-name">{upload.name}</span>
              </div>
            )}
          </div>

          <button
            onClick={handleUpload}
            className="upload-button"
            disabled={isUploading || !upload}
          >
            {isUploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>

        <div className="divider"></div>

        <div className="template-section">
          <h3 className="template-title">Need a sample template?</h3>
          <p className="template-description">
            Download our sample Excel template to ensure proper formatting
          </p>
          <a
            href="/Templates/punchData.xlsx"
            download="PunchSample.xlsx"
            className="download-button"
          >
            Download Sample Template
          </a>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default UploadAttendance;
