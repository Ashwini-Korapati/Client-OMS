import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  setShiftTime, 
  setWorkType, 
  setSelfie,
  checkIn, 
  checkOut 
} from '../../../Redux/Slices/AttendanceReducers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Attendance.css';
import touchscreen from '../../../Assets/bio1.jpg';

const AttendanceForm = ({ className = "" }) => {
  const dispatch = useDispatch();
  const { 
    checkInTime, 
    checkOutTime, 
    totalHours, 
    selfie, 
    isLoading,
    error,
    date 
  } = useSelector((state) => state.attendance);
  
  const [shiftTime, setShiftTimeState] = useState("");
  const [location, setLocation] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 150, height: 150 } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      toast.error("Camera access denied. Please enable permissions.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    const imageData = canvasRef.current.toDataURL("image/jpeg");
    dispatch(setSelfie(imageData));
    stopCamera();
  };

  const handleCheckIn = async (e) => {
    e.preventDefault();
    
    if (!shiftTime || !location) {
      toast.error("Please select shift time and work type");
      return;
    }

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const formData = new FormData();
      formData.append("shift_time", shiftTime);
      formData.append("location", location);
      formData.append("latitude", position.coords.latitude);
      formData.append("longitude", position.coords.longitude);
      
      if (location === "workFromHome" && selfie) {
        const blob = dataURItoBlob(selfie);
        formData.append("wfhAvatar", blob, "selfie.jpg");
      }

      await dispatch(checkIn(formData)).unwrap();
      toast.success("Checked in successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to check in");
    }
  };

  const handleCheckOut = async () => {
    try {
      await dispatch(checkOut()).unwrap();
      toast.success("Checked out successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to check out");
    }
  };

  useEffect(() => {
    if (location === "workFromHome") {
      startCamera();
    } else {
      stopCamera();
    }
    
    return () => {
      stopCamera();
    };
  }, [location]);

  const formatTime = (time, date) => {
    if (!time || !date) return "N/A";
    return new Date(`${date}T${time}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className={`attendance-form-container ${className}`}>
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="heading-a">Attendance</h1>
      
      <div className="main-container-attendance">
        <div className="time-container">
          <div className="date-time-shift-inner">
            <div>
              <img className="touchscreen-icon" src={touchscreen} alt="Biometric" />
            </div>
            
            <div className="form11">
              <form onSubmit={handleCheckIn}>
                <div className="form-group">
                  <label>Shift Time</label>
                  <select
                    value={shiftTime}
                    onChange={(e) => setShiftTimeState(e.target.value)}
                    className="shift-time-select"
                    required
                    disabled={isLoading}
                  >
                    <option value="">Select Shift</option>
                    <option value="9am - 5pm">9am - 5pm</option>
                    <option value="5pm to 1am">5pm to 1am</option>
                    <option value="12am to 8am">12am to 8am</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Type Of Work</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="work-type-select"
                    required
                    disabled={isLoading}
                  >
                    <option value="">Select Work Type</option>
                    <option value="office">Work from Office</option>
                    <option value="workFromHome">Work from Home</option>
                  </select>
                </div>
                
                {location === "workFromHome" && (
                  <div className="video-container">
                    {!selfie ? (
                      <video ref={videoRef} width="150" height="150" autoPlay />
                    ) : (
                      <img src={selfie} alt="Selfie" className="captured-selfie" />
                    )}
                    {!selfie && (
                      <button
                        type="button"
                        onClick={capturePhoto}
                        className="capture-button"
                        disabled={isLoading}
                      >
                        Capture Selfie
                      </button>
                    )}
                    <canvas ref={canvasRef} width="150" height="150" style={{ display: "none" }} />
                  </div>
                )}
                
                <div className="submit-container">
                  <button 
                    type="submit" 
                    className="group-button"
                    disabled={isLoading || checkInTime}
                  >
                    {isLoading ? 'Processing...' : 'Check In'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCheckOut}
                    className="group-button"
                    disabled={isLoading || !checkInTime || checkOutTime}
                  >
                    {isLoading ? 'Processing...' : 'Check Out'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="work-hours">
            {checkInTime && (
              <div>Check-in Time: {formatTime(checkInTime, date)}</div>
            )}
            {checkOutTime && (
              <div>Check-out Time: {formatTime(checkOutTime, date)}</div>
            )}
            {totalHours > 0 && (
              <div>Total Hours Worked: {totalHours} hours</div>
            )}
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const buffer = new ArrayBuffer(byteString.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i);
  }
  return new Blob([buffer], { type: mimeString });
}

export default AttendanceForm;