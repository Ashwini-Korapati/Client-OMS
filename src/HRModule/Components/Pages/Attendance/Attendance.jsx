import React, { useState, useRef } from "react";
import '../Attendance/Attendance.css'
import { Button } from "react-bootstrap";

const LeaveMetrics = () => {
  const [workType, setWorkType] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const [photo, setPhoto] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleWorkTypeChange = (event) => {
    setWorkType(event.target.value);
    if (event.target.value === "workFromHome") {
      setShowCamera(true);
      startCamera();
    } else {
      setShowCamera(false);
      stopCamera();
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error accessing the camera", err);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageData = canvasRef.current.toDataURL("image/png");
    setPhoto(imageData);
    stopCamera();
    setShowCamera(false);
  };

  return (
    <div className="containerStyle1">
      <div className="cont1">
        <form>
          <div className="form-header1">
            <h1>Attendance Form</h1>
          </div>

          <div className="row">
            <div className="input-box">
              <label>Shift Timings</label>
              <select required>
                <option value="">Select Shift Timings</option>
                <option value="9to5">9am to 5pm</option>
                <option value="5to1">5pm to 1am</option>
                <option value="12to8">12am to 8am</option>
              </select>
            </div>

            <div className="input-box">
              <label>Type of work</label>
              <select value={workType} onChange={handleWorkTypeChange} required>
                <option value="">Select Type of Work</option>
                <option value="office">Work from Office</option>
                <option value="workFromHome">Work from Home</option>
              </select>
            </div>

            <div className="input-box">
              <label>Start Date</label>
              <input type="date" required />
            </div>

            <div className="input-box">
              <label>End Date</label>
              <input type="date" required />
            </div>
          </div>

          <div className="input-box">
            <label>Reason for Leave</label>
            <textarea rows="4" required></textarea>
          </div>

          {showCamera && (
            <div className="camera-container">
              <video ref={videoRef} autoPlay className="video-preview" />
              <Button onClick={capturePhoto} className="capture-button">Capture Selfie</Button>
              <canvas ref={canvasRef} width="640" height="480" className="hidden-canvas" />
            </div>
          )}

          {photo && (
            <div className="photo-preview">
              <label>Captured Selfie:</label>
              <img src={photo} alt="Captured Selfie" className="captured-photo" />
            </div>
          )}

          <Button className="hr-add-button1">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default LeaveMetrics;