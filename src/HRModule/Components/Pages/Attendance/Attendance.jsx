import React, { useRef } from "react";
import '../Attendance/Attendance.css';
import { Button } from "react-bootstrap";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setShiftTime, setLocation, setMessegebox, setPhoto, clearPhoto } from  '../../../Redux/Reducers/AttendanceReducers'

const Attendance = () => {
  const dispatch = useDispatch();
  const { shift_time, location, messegebox, showCamera, photo } = useSelector((state) => state.form);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'shift_time':
        dispatch(setShiftTime(value));
        break;
      case 'location':
        dispatch(setLocation(value));
        if (value === 'workFromHome') {
          startCamera();
        } else {
          stopCamera();
        }
        break;
      case 'messegebox':
        dispatch(setMessegebox(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!shift_time || !location || !messegebox) {
      alert('Please fill in all required fields.');
      return;
    }
    if (location === 'workFromHome' && !photo) {
      alert('Please capture a selfie.');
      return;
    }

    const dataToSend = {
      shift_time,
      location,
      messegebox,
      photo,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/v1//employee/attendence/check_in', dataToSend);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
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
    dispatch(setPhoto(imageData));
    stopCamera();
  };

  return (
    <div className="containerStyle1">
      <div className="cont1">
        <form onSubmit={handleSubmit}>
          <div className="form-header1">
            <h1>Attendance Form</h1>
          </div>

          <div className="row">
            <div className="input-box">
              <label>Shift Timings</label>
              <select
                name="shift_time"
                value={shift_time}
                onChange={handleChange}
                required
              >
                <option value="">Select Shift Timings</option>
                <option value="9to5">9am to 5pm</option>
                <option value="5to1">5pm to 1am</option>
                <option value="12to8">12am to 8am</option>
              </select>
            </div>

            <div className="input-box">
              <label>Type of work</label>
              <select
                name="location"
                value={location}
                onChange={handleChange}
                required
              >
                <option value="">Select Type of Work</option>
                <option value="office">Work from Office</option>
                <option value="workFromHome">Work from Home</option>
              </select>
            </div>
          </div>

          <div className="input-box">
            <label>Message Box</label>
            <textarea
              name="messegebox"
              value={messegebox}
              onChange={handleChange}
              rows="4"
            />
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

          <Button type="submit" className="hr-add-button1">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Attendance;
