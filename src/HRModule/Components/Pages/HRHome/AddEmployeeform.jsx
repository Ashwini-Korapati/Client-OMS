// import React from "react";
// import "./AddEmployeeform.css";
// import { Button } from "react-bootstrap";
// import { AiTwotoneCloseCircle } from "react-icons/ai";

// const AddEmployeeform = () => {

//   const handleFileChange = (event) => {
//     dispatch(updateFormData({ selectedFiles: event.target.files }));
//   };

//   const handleClose = () => {
//     window.location.href = '/hr-dashboard/hr-home'; 
//   };

//   return (
//     <div className="containerStyle">
//       <div className="cont">
//         <form>
//           <div className="form-header">
//             <h1>Add Employee</h1>
//             <div className="close-icon" onClick={handleClose}>
//             <AiTwotoneCloseCircle />
//               {/* <i className="fas fa-times"></i> */}
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-half">
//               <div className="input-box">
//                 <label>Full Name</label>
//                 <input type="text" required />
//               </div>

//               <div className="input-box">
//                 <label>Email ID</label>
//                 <input type="email" required />
//               </div>

//               <div className="input-box">
//                 <label>Contact Details</label>
//                 <input type="text" required />
//               </div>

//               <div className="input-box">
//                 <label>Bank Name</label>
//                 <input type="text" required />
//               </div>

//               <div className="input-box">
//                 <label>Address Proof (Aadhar card, Driving Licence, Voter ID, Ration Card)</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   multiple
//                   className="file-input"
//                 />
//               </div>
//             </div>

//             <div className="col-half">
//               <div className="input-box">
//                 <label>Bank Account Number</label>
//                 <input type="text" required />
//               </div>

//               <div className="input-box">
//                 <label>Bank IFSC Code</label>
//                 <input type="text" required />
//               </div>

//               <div className="input-box">
//                 <label>Bank Passbook</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   multiple
//                   className="file-input"
//                 />
//               </div>

//               <div className="input-box">
//                 <label>Pan Card</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                   multiple
//                   className="file-input"
//                 />
//               </div>
//             </div>
//           </div>

//           <Button className="hr-add-button">Add</Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddEmployeeform;