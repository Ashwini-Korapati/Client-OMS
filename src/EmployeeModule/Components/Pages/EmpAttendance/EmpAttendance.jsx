
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setShiftTime,
  setWorkType,
  setSelfie,
  checkIn,
  checkOut,
} from '../../../../HRModule/Redux/Reducers/AttendanceReducers'
import PropTypes from "prop-types";
import '../EmpAttendance/EmpAttendance.css'
import touchscreen from '../../../Assets/identification.png'
import { SiTicktick } from "react-icons/si";
// import rightCornerImage from '../../../Assets/atd.png'

const AttendanceForm = ({ className = "" }) => {
  const dispatch = useDispatch();
  const { checkInTime, checkOutTime, totalHours, selfie, success } = useSelector((state) => state.attendance);
  const [shiftTime, setShiftTimeState] = useState("");
  const [location, setLocation] = useState("");
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

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
      tracks.forEach((track) => track.stop());
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

  const handleCheckIn = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("shift_time", shiftTime);
    formData.append("location", location);
    if (location === "workFromHome" && selfie) {
      const blob = dataURItoBlob(selfie, "image/jpeg");
      formData.append("wfhAvatar", blob, "selfie.jpg");
    }
    dispatch(checkIn(formData));
  };

  const handleCheckOut = () => {
    dispatch(checkOut());
  };

  useEffect(() => {
    if (location === "workFromHome") {
      startCamera();
    } else {
      stopCamera();
    }
  }, [location]);

  useEffect(() => {
    if (success && checkInTime) {
      setIsCheckedIn(true);
      setIsCheckedOut(false);
    }
    if (success && checkOutTime) {
      setIsCheckedIn(false);
      setIsCheckedOut(true);
    }
  }, [success, checkInTime, checkOutTime]);

  return (
    <div className={`emp-attendance-form-container ${className}`}>
              {/* <img src={rightCornerImage} alt="Right Corner" className="right-corner-image" />  */}

      {/* <img src={back} alt="" className="background-image" /> */}
      <div className="emp-main-container-attendance">
        <div className="emp-time-container">
        <h2 className="emp-heading">Attendance</h2>

          <div className="emp-date-time-shift-inner">
            <div className="emp-date-time-shift-content">
              <div className="emp-date-time-shift-items">
                <div className="emp-date-time-shift-items-inner">
                  <div>
                    <img
                      className="emp-touchscreen-icon"
                      loading="lazy"
                      alt=""
                      src={touchscreen}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="emp-form11">
              <form onSubmit={handleCheckIn}>
                <div className="emp-inputs">
                <div>
                  <div>Shift Time</div>
                  <div>
                    <select
                      value={shiftTime}
                      required
                      onChange={(e) => setShiftTimeState(e.target.value)}
                      className="emp-shift-time-select"
                    >
                      <option value="">Select Shift</option>
                      <option value="9am - 5pm">9am - 5pm</option>
                      <option value="5pm to 1am">5pm to 1am</option>
                      <option value="12am to 8am">12am to 8am</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>Type Of Work</div>
                  <div>
                    <select
                      value={location}
                      required
                      onChange={(e) => setLocation(e.target.value)}
                      className="emp-work-type-select"
                    >
                      <option value="">Select Work Type</option>
                      <option value="office">Work from Office</option>
                      <option value="workFromHome">Work from Home</option>
                    </select>
                  </div>
                </div>
                </div>
                {location === "workFromHome" && (
                  <div className="emp-video-container">
                    {!selfie ? (
                      <video ref={videoRef} width="150" height="150" autoPlay />
                    ) : (
                      <img src={selfie} alt="Captured Selfie" className="emp-captured-selfie" />
                    )}
                    <button
                      type=""
                      onClick={capturePhoto}
                      className="emp-capture-button"
                    >
                      <SiTicktick className="emp-icon"/>
                    </button>
                    <canvas
                      ref={canvasRef}
                    //   width="150"
                    //   height="150"
                      style={{ display: "none" }}
                    ></canvas>
                  </div>
                )}
                <div className="emp-submit-container">
                    <div className="emp-submit"> 
                    <button type="submit" className="emp-group-button" disabled={isCheckedIn}>
                    Check In
                  </button>
                  <button
                    type="button"
                    onClick={handleCheckOut}
                    className="emp-group-button"
                    disabled={!isCheckedIn || isCheckedOut}
                  >
                    Check Out
                  </button>
                    </div>


                  <div className="work-hours">
              {checkInTime && (
                <div className="check-in-time">
                  Check-in Time: {new Date(checkInTime).toLocaleTimeString()}
                </div>
              )}
              <br />
              {checkOutTime && (
                <div>
                  Check-out Time: {new Date(checkOutTime).toLocaleTimeString()}
                </div>
              )}
              <br />
              {totalHours > 0 && (
                <div>
                  Total Hours Worked: {totalHours} hours
                </div>
              )}
            </div>
                </div>
              </form>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

AttendanceForm.propTypes = {
  className: PropTypes.string,
};

export default AttendanceForm;

function dataURItoBlob(dataURI, format = "image/png") {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = format;
  const buffer = new ArrayBuffer(byteString.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i);
  }
  return new Blob([buffer], { type: mimeString });
}
