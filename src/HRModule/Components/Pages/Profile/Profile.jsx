// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import avatar from '../../../Assets/avatar.png';
// // // import './Profile.css';

// // // const EmployeeProfile = () => {
// // //   const [currentStep, setCurrentStep] = useState('PersonalData');
// // //   const [formData, setFormData] = useState({
// // //     employeeId: '',
// // //     name: '',
// // //     designation: '',
// // //     contact: '',
// // //     email: '',
// // //     status: '',
// // //     manager: '',
// // //     department: '',
// // //     salutation: '',
// // //     firstName: '',
// // //     middleName: '',
// // //     lastName: '',
// // //     aboutYourself: '',
// // //   });

// // //   useEffect(() => {
// // //     // Fetch employee data from backend
// // //     axios.get('/api/employee')
// // //       .then(response => {
// // //         setFormData(response.data);
// // //       })
// // //       .catch(error => {
// // //         console.error('There was an error fetching the employee data!', error);
// // //       });
// // //   }, []);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Update employee data in the backend
// // //     axios.put('/api/employee', formData)
// // //       .then(response => {
// // //         console.log('Employee data updated successfully:', response.data);
// // //       })
// // //       .catch(error => {
// // //         console.error('There was an error updating the employee data!', error);
// // //       });
// // //   };

// // //   const renderStep = () => {
// // //     switch (currentStep) {
// // //       case 'PersonalData':
// // //         return (
// // //           <div>
// // //             <h2>Personal Data</h2>
// // //             <form onSubmit={handleSubmit}>
// // //               <label>
// // //                 Employee ID:
// // //                 <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} disabled />
// // //               </label>
// // //               <br />
// // //               <label>
// // //                 Salutation:
// // //                 <input type="text" name="salutation" value={formData.salutation} onChange={handleChange} />
// // //               </label>
// // //               <br />
// // //               <label>
// // //                 First Name:
// // //                 <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
// // //               </label>
// // //               <br />
// // //               <label>
// // //                 Middle Name:
// // //                 <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
// // //               </label>
// // //               <br />
// // //               <label>
// // //                 Last Name:
// // //                 <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
// // //               </label>
// // //               <br />
// // //               <label>
// // //                 About Yourself:
// // //                 <textarea name="aboutYourself" value={formData.aboutYourself} onChange={handleChange}></textarea>
// // //               </label>
// // //               <br />
// // //               <button type="submit">Update</button>
// // //             </form>
// // //           </div>
// // //         );
// // //       case 'WorkProfile':
// // //         return (
// // //           <div>
// // //             <h2>Work Profile</h2>
// // //             <form onSubmit={handleSubmit}>
// // //               <label>
// // //                 Designation:
// // //                 <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
// // //               </label>
// // //               <br />
// // //               <label>
// // //                 Contact:
// // //                 <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
// // //               </label>
// // //               <br />
// // //               <label>
// // //                 Email:
// // //                 <input type="email" name="email" value={formData.email} onChange={handleChange} />
// // //               </label>
// // //               <br />
// // //               <label>
// // //                 Status:
// // //                 <input type="text" name="status" value={formData.status} onChange={handleChange} disabled />
// // //               </label>
// // //               <br />
// // //               <button type="submit">Update</button>
// // //             </form>
// // //           </div>
// // //         );
// // //       case 'Document':
// // //         return (
// // //           <div>
// // //             <h2>Document</h2>
// // //             {/* Add Document fields here */}
// // //           </div>
// // //         );
// // //       case 'BankingDetails':
// // //         return (
// // //           <div>
// // //             <h2>Banking Details</h2>
// // //             {/* Add BankingDetails fields here */}
// // //           </div>
// // //         );
// // //       default:
// // //         return <div>Select a step</div>;
// // //     }
// // //   };

// // //   return (
// // //     <div className="employee-profile">
// // //       <div className="employee-header">
// // //         <div className="profile-left">
// // //           <img className='profile-logo' src={avatar} alt="Profile" />
// // //           <div>
// // //             <h1>Employee Profile</h1>
// // //             <p>{formData.name}</p>
// // //             <div className="employee-info">
// // //               <div className="employee-profile-card">
// // //                 <p><strong>Employee ID:</strong> {formData.employeeId}</p>
// // //                 <p><strong>Designation:</strong> {formData.designation}</p>
// // //                 <p><strong>Contact:</strong> {formData.contact}</p>
// // //                 <p><strong>Email:</strong> {formData.email}</p>
// // //                 <p><strong>Status:</strong> {formData.status}</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="step-navigation">
// // //         <button className={currentStep === 'PersonalData' ? 'active' : ''} onClick={() => setCurrentStep('PersonalData')}>Personal Data</button>
// // //         <button className={currentStep === 'WorkProfile' ? 'active' : ''} onClick={() => setCurrentStep('WorkProfile')}>Work Profile</button>
// // //         <button className={currentStep === 'Document' ? 'active' : ''} onClick={() => setCurrentStep('Document')}>Document</button>
// // //         <button className={currentStep === 'BankingDetails' ? 'active' : ''} onClick={() => setCurrentStep('BankingDetails')}>Banking Details</button>
// // //       </div>

// // //       <div className="step-content">
// // //         {renderStep()}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default EmployeeProfile;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import avatar from '../../../Assets/avatar.png';
// // import './Profile.css';

// // const EmployeeProfile = () => {
// //   const [currentStep, setCurrentStep] = useState('PersonalData');
// //   const [formData, setFormData] = useState({
// //     employeeId: '',
// //     name: '',
// //     designation: '',
// //     contact: '',
// //     email: '',
// //     status: '',
// //     manager: '',
// //     department: '',
// //     salutation: '',
// //     firstName: '',
// //     middleName: '',
// //     lastName: '',
// //     aboutYourself: '',
// //   });

// //   const [documentFormData, setDocumentFormData] = useState({
// //     panCard: '',
// //     aadharCard: '',
// //     pdfDocument: '',
// //     graduationDocument: '',
// //   });

// //   const [bankingFormData, setBankingFormData] = useState({
// //     bankName: '',
// //     accountNumber: '',
// //     ifscCode: '',
// //   });

// //   useEffect(() => {
// //     // Fetch employee data from backend
// //     axios.get('/api/employee')
// //       .then(response => {
// //         setFormData(response.data);
// //         setDocumentFormData({
// //           panCard: response.data.panCard,
// //           aadharCard: response.data.aadharCard,
// //           pdfDocument: response.data.pdfDocument,
// //           graduationDocument: response.data.graduationDocument,
// //         });
// //         setBankingFormData({
// //           bankName: response.data.bankName,
// //           accountNumber: response.data.accountNumber,
// //           ifscCode: response.data.ifscCode,
// //         });
// //       })
// //       .catch(error => {
// //         console.error('There was an error fetching the employee data!', error);
// //       });
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleDocumentChange = (e) => {
// //     const { name, files } = e.target;
// //     // Assuming single file upload per input
// //     setDocumentFormData({ ...documentFormData, [name]: files[0] });
// //   };

// //   const handleBankingChange = (e) => {
// //     const { name, value } = e.target;
// //     setBankingFormData({ ...bankingFormData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Update employee data in the backend
// //     axios.put('/api/employee', formData)
// //       .then(response => {
// //         console.log('Employee data updated successfully:', response.data);
// //       })
// //       .catch(error => {
// //         console.error('There was an error updating the employee data!', error);
// //       });

// //     // Update document data in the backend
// //     axios.put('/api/employee/documents', documentFormData)
// //       .then(response => {
// //         console.log('Documents updated successfully:', response.data);
// //       })
// //       .catch(error => {
// //         console.error('There was an error updating the documents!', error);
// //       });

// //     // Update banking details in the backend
// //     axios.put('/api/employee/banking', bankingFormData)
// //       .then(response => {
// //         console.log('Banking details updated successfully:', response.data);
// //       })
// //       .catch(error => {
// //         console.error('There was an error updating the banking details!', error);
// //       });
// //   };

// //   const renderStep = () => {
// //     switch (currentStep) {
// //       case 'PersonalData':
// //         return (
// //           <div>
// //             <h2>Personal Data</h2>
// //             <form onSubmit={handleSubmit}>
// //               <label>
// //                 Employee ID:
// //                 <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} disabled />
// //               </label>
// //               <br />

// //               <br />
// //               <label>
// //                 First Name:
// //                 <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
// //               </label>
// //               <br />
// //               <label>
// //                 Middle Name:
// //                 <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
// //               </label>
// //               <br />
// //               <label>
// //                 Last Name:
// //                 <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
// //               </label>
// //               <br />
// //               <label>
// //                 About Yourself:
// //                 <textarea name="aboutYourself" value={formData.aboutYourself} onChange={handleChange}></textarea>
// //               </label>
// //               <br />
// //               <button type="submit">Update</button>
// //             </form>
// //           </div>
// //         );
// //       case 'WorkProfile':
// //         return (
// //           <div>
// //             <h2>Work Profile</h2>
// //             <form onSubmit={handleSubmit}>
// //               <label>
// //                 Designation:
// //                 <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
// //               </label>
// //               <br />
// //               <label>
// //                 Contact:
// //                 <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
// //               </label>
// //               <br />
// //               <label>
// //                 Email:
// //                 <input type="email" name="email" value={formData.email} onChange={handleChange} />
// //               </label>
// //               <br />
// //               <label>
// //                 Status:
// //                 <input type="text" name="status" value={formData.status} onChange={handleChange} disabled />
// //               </label>
// //               <br />
// //               <button type="submit">Update</button>
// //             </form>
// //           </div>
// //         );
// //       case 'Document':
// //         return (
// //           <div>
// //             <h2>Document</h2>
// //             <form onSubmit={handleSubmit}>
// //               <label>
// //                 PAN Card:
// //                 <input type="file" accept=".jpg, .png, .pdf" onChange={handleDocumentChange} name="panCard" />
// //               </label>
// //               <br />
// //               <label>
// //                 Aadhar Card:
// //                 <input type="file" accept=".jpg, .png, .pdf" onChange={handleDocumentChange} name="aadharCard" />
// //               </label>
// //               <br />
// //               <label>
// //                 PDF Document:
// //                 <input type="file" accept=".pdf" onChange={handleDocumentChange} name="pdfDocument" />
// //               </label>
// //               <br />
// //               <label>
// //                 Graduation Document:
// //                 <input type="file" accept=".pdf" onChange={handleDocumentChange} name="graduationDocument" />
// //               </label>
// //               <br />
// //               <button type="submit">Update</button>
// //             </form>
// //           </div>
// //         );
// //       case 'BankingDetails':
// //         return (
// //           <div>
// //             <h2>Banking Details</h2>
// //             <form onSubmit={handleSubmit}>
// //               <label>
// //                 Bank Name:
// //                 <input type="text" name="bankName" value={bankingFormData.bankName} onChange={handleBankingChange} />
// //               </label>
// //               <br />
// //               <label>
// //                 Account Number:
// //                 <input type="text" name="accountNumber" value={bankingFormData.accountNumber} onChange={handleBankingChange} />
// //               </label>
// //               <br />
// //               <label>
// //                 IFSC Code:
// //                 <input type="text" name="ifscCode" value={bankingFormData.ifscCode} onChange={handleBankingChange} />
// //               </label>
// //               <br />
// //               <button type="submit">Update</button>
// //             </form>
// //           </div>
// //         );
// //       default:
// //         return <div>Select a step</div>;
// //     }
// //   };

// //   return (
// //     <div className="employee-profile">
// //       <div className="employee-header">
// //         <div className="profile-left">
// //           <img className='profile-logo' src={avatar} alt="Profile" />
// //           <div>
// //             <h1>Employee Profile</h1>
// //             <p>{formData.name}</p>
// //             <div className="employee-info">
// //               <div className="employee-profile-card">
// //                 <p><strong>Employee ID:</strong> {formData.employeeId}</p>
// //                 <p><strong>Designation:</strong> {formData.designation}</p>
// //                 <p><strong>Contact:</strong> {formData.contact}</p>
// //                 <p><strong>Email:</strong> {formData.email}</p>
// //                 <p><strong>Status:</strong> {formData.status}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="step-navigation">
// //         <button className={currentStep === 'PersonalData' ? 'active' : ''} onClick={() => setCurrentStep('PersonalData')}>Personal Data</button>
// //         <button className={currentStep === 'WorkProfile' ? 'active' : ''} onClick={() => setCurrentStep('WorkProfile')}>Work Profile</button>
// //         <button className={currentStep === 'Document' ? 'active' : ''} onClick={() => setCurrentStep('Document')}>Document</button>
// //         <button className={currentStep === 'BankingDetails' ? 'active' : ''} onClick={() => setCurrentStep('BankingDetails')}>Banking Details</button>
// //       </div>

// //       <div className="step-content">
// //         {renderStep()}
// //       </div>
// //     </div>
// //   );
// // };

// // export default EmployeeProfile;

// // import React, { useState } from 'react';
// // import avatar from '../../../Assets/avatar.png';
// // import './Profile.css';

// // const EmployeeProfile = () => {
// //   const [currentStep, setCurrentStep] = useState('PersonalData');
// //   const [formData] = useState({
// //     employeeId: '123456',
// //     name: 'John Doe',
// //     designation: 'Software Engineer',
// //     contact: '+1234567890',
// //     email: 'john.doe@example.com',
// //     status: 'Active',
// //     manager: 'Jane Smith',
// //     department: 'Engineering',
// //     salutation: 'Mr.',
// //     firstName: 'John',
// //     middleName: '',
// //     lastName: 'Doe',
// //     aboutYourself: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
// //   });

// //   const [documentFormData] = useState({
// //     panCard: "C:\Users\akash\Downloads\Appointment Letter - Ashwini (1).pdf",
// //     aadharCard: '/documents/aadharcard.jpg', // Example URL or path
// //     pdfDocument: '/documents/document.pdf', // Example URL or path
// //     graduationDocument: '/documents/graduation.pdf', // Example URL or path
// //   });

// //   const renderStep = () => {
// //     switch (currentStep) {
// //       case 'PersonalData':
// //         return (
// //           <div>
// //             <h2>Personal Data</h2>
// //             <form>
// //               <label>
// //                 Employee ID:
// //                 <input type="text" value={formData.employeeId} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Salutation:
// //                 <input type="text" value={formData.salutation} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 First Name:
// //                 <input type="text" value={formData.firstName} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Middle Name:
// //                 <input type="text" value={formData.middleName} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Last Name:
// //                 <input type="text" value={formData.lastName} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 About Yourself:
// //                 <textarea value={formData.aboutYourself} readOnly></textarea>
// //               </label>
// //             </form>
// //           </div>
// //         );
// //       case 'WorkProfile':
// //         return (
// //           <div>
// //             <h2>Work Profile</h2>
// //             <form>
// //               <label>
// //                 Designation:
// //                 <input type="text" value={formData.designation} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Contact:
// //                 <input type="text" value={formData.contact} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Email:
// //                 <input type="email" value={formData.email} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Status:
// //                 <input type="text" value={formData.status} readOnly />
// //               </label>
// //             </form>
// //           </div>
// //         );
// //       case 'Document':
// //         return (
// //           <div>
// //             <h2>Document</h2>
// //             <ul>
// //               <li>PAN Card: <a href={documentFormData.panCard} target="_blank" rel="noopener noreferrer">View Document</a></li>
// //               <li>Aadhar Card: <a href={documentFormData.aadharCard} target="_blank" rel="noopener noreferrer">View Document</a></li>
// //               <li>PDF Document: <a href={documentFormData.pdfDocument} target="_blank" rel="noopener noreferrer">View Document</a></li>
// //               <li>Graduation Document: <a href={documentFormData.graduationDocument} target="_blank" rel="noopener noreferrer">View Document</a></li>
// //             </ul>
// //           </div>
// //         );
// //         case 'BankingDetails':
// //           return (
// //             <div>
// //               <h2>Banking Details</h2>
// //               <form onSubmit={handleSubmit}>
// //                 <label>
// //                   Bank Name:
// //                   <input type="text" name="bankName" value={bankingFormData.bankName} onChange={handleBankingChange} />
// //                 </label>
// //                 <br />
// //                 <label>
// //                   Account Number:
// //                   <input type="text" name="accountNumber" value={bankingFormData.accountNumber} onChange={handleBankingChange} />
// //                 </label>
// //                 <br />
// //                 <label>
// //                   IFSC Code:
// //                   <input type="text" name="ifscCode" value={bankingFormData.ifscCode} onChange={handleBankingChange} />
// //                 </label>
// //                 <br />
// //                 <button type="submit">Update</button>
// //               </form>
// //             </div>
// //           );
// //       default:
// //         return <div>Select a step</div>;
// //     }
// //   };

// //   return (
// //     <div className="employee-profile">
// //       <div className="employee-header">
// //         <div className="profile-left">
// //           <img className='profile-logo' src={avatar} alt="Profile" />
// //           <div>
// //             <h1>Employee Profile</h1>
// //             <p>{formData.name}</p>
// //             <div className="employee-info">
// //               <div className="employee-profile-card">
// //                 <p><strong>Employee ID:</strong> {formData.employeeId}</p>
// //                 <p><strong>Designation:</strong> {formData.designation}</p>
// //                 <p><strong>Contact:</strong> {formData.contact}</p>
// //                 <p><strong>Email:</strong> {formData.email}</p>
// //                 <p><strong>Status:</strong> {formData.status}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="step-navigation">
// //         <button className={currentStep === 'PersonalData' ? 'active' : ''} onClick={() => setCurrentStep('PersonalData')}>Personal Data</button>
// //         <button className={currentStep === 'WorkProfile' ? 'active' : ''} onClick={() => setCurrentStep('WorkProfile')}>Work Profile</button>
// //         <button className={currentStep === 'Document' ? 'active' : ''} onClick={() => setCurrentStep('Document')}>Document</button>
// //         <button className={currentStep === 'BankingDetails' ? 'active' : ''} onClick={() => setCurrentStep('BankingDetails')}>Banking Details</button>
// //       </div>

// //       <div className="step-content">
// //         {renderStep()}
// //       </div>
// //     </div>
// //   );
// // };

// // export default EmployeeProfile;

// // import React, { useState } from 'react';
// // import avatar from '../../../Assets/avatar.png';
// // import './Profile.css';

// // const EmployeeProfile = () => {
// //   const [currentStep, setCurrentStep] = useState('PersonalData');
// //   const [formData] = useState({
// //     employeeId: '123456',
// //     name: 'John Doe',
// //     designation: 'Software Engineer',
// //     contact: '+1234567890',
// //     email: 'john.doe@example.com',
// //     status: 'Active',
// //     manager: 'Jane Smith',
// //     department: 'Engineering',
// //     salutation: 'Mr.',
// //     firstName: 'John',
// //     middleName: 'Korapati',
// //     lastName: 'Doe',
// //     aboutYourself: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
// //   });

// //   const [documentFormData] = useState({
// //     panCard: "C:\\Users\\akash\\Downloads\\Appointment Letter - Ashwini (1).pdf",
// //     aadharCard: '/documents/aadharcard.jpg', // Example URL or path
// //     pdfDocument: '/documents/document.pdf', // Example URL or path
// //     graduationDocument: '/documents/graduation.pdf', // Example URL or path
// //   });

// //   const [bankingFormData, setBankingFormData] = useState({
// //     bankName: 'kotak bank',
// //     accountNumber: '041458276',
// //     ifscCode: 'KKBK8023'
// //   });

// //   const handleBankingChange = (e) => {
// //     const { name, value } = e.target;
// //     setBankingFormData({
// //       ...bankingFormData,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Logic to handle form submission (e.g., API call to update backend)
// //     console.log('Banking form submitted:', bankingFormData);
// //     // You can add logic here to update backend or perform necessary actions
// //   };

// //   const renderStep = () => {
// //     switch (currentStep) {
// //       case 'PersonalData':
// //         return (
// //           <div>
// //             <h2>Personal Data</h2>
// //             <form>
// //               <label>
// //                 Employee ID:
// //                 <input type="text" value={formData.employeeId} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Salutation:
// //                 <input type="text" value={formData.salutation} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 First Name:
// //                 <input type="text" value={formData.firstName} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Middle Name:
// //                 <input type="text" value={formData.middleName} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Last Name:
// //                 <input type="text" value={formData.lastName} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 About Yourself:
// //                 <textarea value={formData.aboutYourself} readOnly></textarea>
// //               </label>
// //             </form>
// //           </div>
// //         );
// //       case 'WorkProfile':
// //         return (
// //           <div>
// //             <h2>Work Profile</h2>
// //             <form>
// //               <label>
// //                 Designation:
// //                 <input type="text" value={formData.designation} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Contact:
// //                 <input type="text" value={formData.contact} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Email:
// //                 <input type="email" value={formData.email} readOnly />
// //               </label>
// //               <br />
// //               <label>
// //                 Status:
// //                 <input type="text" value={formData.status} readOnly />
// //               </label>
// //             </form>
// //           </div>
// //         );
// //       case 'Document':
// //         return (
// //           <div>
// //             <h2>Document</h2>
// //             <ul>
// //               <li>PAN Card: <a href={documentFormData.panCard} target="_blank" rel="noopener noreferrer">View Document</a></li>
// //               <li>Aadhar Card: <a href={documentFormData.aadharCard} target="_blank" rel="noopener noreferrer">View Document</a></li>
// //               <li>PDF Document: <a href={documentFormData.pdfDocument} target="_blank" rel="noopener noreferrer">View Document</a></li>
// //               <li>Graduation Document: <a href={documentFormData.graduationDocument} target="_blank" rel="noopener noreferrer">View Document</a></li>
// //             </ul>
// //           </div>
// //         );
// //       case 'BankingDetails':
// //         return (
// //           <div>
// //             <h2>Banking Details</h2>
// //             <form onSubmit={handleSubmit}>
// //               <label>
// //                 Bank Name:
// //                 <input type="text" name="bankName" value={bankingFormData.bankName} onChange={handleBankingChange} />
// //               </label>
// //               <br />
// //               <label>
// //                 Account Number:
// //                 <input type="text" name="accountNumber" value={bankingFormData.accountNumber} onChange={handleBankingChange} />
// //               </label>
// //               <br />
// //               <label>
// //                 IFSC Code:
// //                 <input type="text" name="ifscCode" value={bankingFormData.ifscCode} onChange={handleBankingChange} />
// //               </label>
// //               <br />
// //               <button type="submit">Update</button>
// //             </form>
// //           </div>
// //         );
// //       default:
// //         return <div>Select a step</div>;
// //     }
// //   };

// //   return (
// //     <div className="employee-profile">
// //       <div className="employee-header">
// //         <div className="profile-left">
// //           <img className='profile-logo' src={avatar} alt="Profile" />
// //           <div>
// //             <h1>Employee Profile</h1>
// //             <p>{formData.name}</p>
// //             <div className="employee-info">
// //               <div className="employee-profile-card">
// //                 <p><strong>Employee ID:</strong> {formData.employeeId}</p>
// //                 <p><strong>Designation:</strong> {formData.designation}</p>
// //                 <p><strong>Contact:</strong> {formData.contact}</p>
// //                 <p><strong>Email:</strong> {formData.email}</p>
// //                 <p><strong>Status:</strong> {formData.status}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="step-navigation">
// //         <button className={currentStep === 'PersonalData' ? 'active' : ''} onClick={() => setCurrentStep('PersonalData')}>Personal Data</button>
// //         <button className={currentStep === 'WorkProfile' ? 'active' : ''} onClick={() => setCurrentStep('WorkProfile')}>Work Profile</button>
// //         <button className={currentStep === 'Document' ? 'active' : ''} onClick={() => setCurrentStep('Document')}>Document</button>
// //         <button className={currentStep === 'BankingDetails' ? 'active' : ''} onClick={() => setCurrentStep('BankingDetails')}>Banking Details</button>
// //       </div>

// //       <div className="step-content">
// //         {renderStep()}
// //       </div>
// //     </div>
// //   );
// // };

// // export default EmployeeProfile;
// import React, { useState } from 'react';
// import avatar from '../../../Assets/avatar.png';
// import './Profile.css';

// const EmployeeProfile = () => {
//   const [currentStep, setCurrentStep] = useState('PersonalData');
//   const [formData, setFormData] = useState({
//     employeeId: '123456',
//     name: 'John Doe',
//     designation: 'Software Engineer',
//     contact: '+1234567890',
//     email: 'john.doe@example.com',
//     status: 'Active',
//     manager: 'Jane Smith',
//     department: 'Engineering',
//     salutation: 'Mr.',
//     firstName: 'John',
//     middleName: 'Korapati',
//     lastName: 'Doe',
//     aboutYourself: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   });

//   const handlePersonalInfoSubmit = (e) => {
//     e.preventDefault();
//     // Logic to handle form submission (e.g., API call to update backend)
//     console.log('Personal info updated:', formData);
//     // You can add logic here to update backend or perform necessary actions
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 'PersonalData':
//         return (
//           <div>
//             <h2>Personal Data</h2>
//             <form onSubmit={handlePersonalInfoSubmit}>
//               <label>
//                 Employee ID:
//                 <input type="text" value={formData.employeeId} readOnly />
//               </label>
//               <br />
//               <label>
//                 Salutation:
//                 <input type="text" name="salutation" value={formData.salutation} onChange={handleInputChange} />
//               </label>
//               <br />
//               <label>
//                 First Name:
//                 <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
//               </label>
//               <br />
//               <label>
//                 Middle Name:
//                 <input type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} />
//               </label>
//               <br />
//               <label>
//                 Last Name:
//                 <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
//               </label>
//               <br />
//               <label>
//                 About Yourself:
//                 <textarea name="aboutYourself" value={formData.aboutYourself} onChange={handleInputChange}></textarea>
//               </label>
//               <br />
//               <button type="submit">Update Personal Info</button>
//             </form>
//           </div>
//         );
//       case 'WorkProfile':
//         return (
//           <div>
//             <h2>Work Profile</h2>
//             <form onSubmit={handlePersonalInfoSubmit}>
//               <label>
//                 Designation:
//                 <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} />
//               </label>
//               <br />
//               <label>
//                 Contact:
//                 <input type="text" name="contact" value={formData.contact} onChange={handleInputChange} />
//               </label>
//               <br />
//               <label>
//                 Email:
//                 <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//               </label>
//               <br />
//               <label>
//                 Status:
//                 <input type="text" name="status" value={formData.status} onChange={handleInputChange} />
//               </label>
//               <br />
//               <button type="submit">Update Work Profile</button>
//             </form>
//           </div>
//         );
//       case 'Document':
//         return (
//           <div>
//             <h2>Document</h2>
//             <ul>
//               <li>PAN Card: <a href="/documents/pancard.pdf" target="_blank" rel="noopener noreferrer">View Document</a></li>
//               <li>Aadhar Card: <a href="/documents/aadharcard.jpg" target="_blank" rel="noopener noreferrer">View Document</a></li>
//               <li>PDF Document: <a href="/documents/document.pdf" target="_blank" rel="noopener noreferrer">View Document</a></li>
//               <li>Graduation Document: <a href="/documents/graduation.pdf" target="_blank" rel="noopener noreferrer">View Document</a></li>
//             </ul>
//           </div>
//         );
//       case 'BankingDetails':
//         return (
//           <div>
//             <h2>Banking Details</h2>
//             <form>
//               <label>
//                 Bank Name:
//                 <input type="text" value={formData.bankName} readOnly />
//               </label>
//               <br />
//               <label>
//                 Account Number:
//                 <input type="text" value={formData.accountNumber} readOnly />
//               </label>
//               <br />
//               <label>
//                 IFSC Code:
//                 <input type="text" value={formData.ifscCode} readOnly />
//               </label>
//               <br />
//             </form>
//           </div>
//         );
//       default:
//         return <div>Select a step</div>;
//     }
//   };

//   return (
//     <div className="employee-profile">
//       <div className="employee-header">
//         <div className="profile-left">
//           <img className='profile-logo' src={avatar} alt="Profile" />
//           <div>
//             <h1>Employee Profile</h1>
//             <p>{formData.name}</p>
//             <div className="employee-info">
//               <div className="employee-profile-card">
//                 <p><strong>Employee ID:</strong> {formData.employeeId}</p>
//                 <p><strong>Designation:</strong> {formData.designation}</p>
//                 <p><strong>Contact:</strong> {formData.contact}</p>
//                 <p><strong>Email:</strong> {formData.email}</p>
//                 <p><strong>Status:</strong> {formData.status}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="step-navigation">
//         <button className={currentStep === 'PersonalData' ? 'active' : ''} onClick={() => setCurrentStep('PersonalData')}>Personal Data</button>
//         <button className={currentStep === 'WorkProfile' ? 'active' : ''} onClick={() => setCurrentStep('WorkProfile')}>Work Profile</button>
//         <button className={currentStep === 'Document' ? 'active' : ''} onClick={() => setCurrentStep('Document')}>Document</button>
//         <button className={currentStep === 'BankingDetails' ? 'active' : ''} onClick={() => setCurrentStep('BankingDetails')}>Banking Details</button>
//       </div>

//       <div className="step-content">
//         {renderStep()}
//       </div>
//     </div>
//   );
// };

// export default EmployeeProfile;

// import React, { useState } from "react";
// import avatar from "../../../Assets/avatar.png";
// import document from '../../../Assets/simba.pdf'
// import "./Profile.css";

// const EmployeeProfile = () => {
//   const [currentStep, setCurrentStep] = useState("PersonalData");
//   const [formData, setFormData] = useState({
//     employeeId: "123456",
//     name: "John Doe",
//     designation: "Software Engineer",
//     contact: "+1234567890",
//     email: "john.doe@example.com",
//     status: "Active",
//     manager: "Jane Smith",
//     department: "Engineering",
//     salutation: "Mr.",
//     firstName: "John",
//     middleName: "Korapati",
//     lastName: "Doe",
//     aboutYourself: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     bankName: "Bank of Example",
//     accountNumber: "1234567890123456",
//     ifscCode: "EXAMPL0001234",
//   });
//   const [visibleDocument, setVisibleDocument] = useState(null);

//   const handlePersonalInfoSubmit = (e) => {
//     e.preventDefault();
//     // Logic to handle form submission (e.g., API call to update backend)
//     console.log("Personal info updated:", formData);
//     // You can add logic here to update backend or perform necessary actions
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleDocumentToggle = (documentName) => {
//     setVisibleDocument(visibleDocument === documentName ? null : documentName);
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case "PersonalData":
//         return (
//           <div>
//             <h2>Personal Data</h2>
//             <form onSubmit={handlePersonalInfoSubmit}>
//               <label>
//                 Employee ID:
//                 <input type="text" value={formData.employeeId} readOnly />
//               </label>
//               <br />
//               <label>
//                 Salutation:
//                 <input
//                   type="text"
//                   name="salutation"
//                   value={formData.salutation}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 First Name:
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 Middle Name:
//                 <input
//                   type="text"
//                   name="middleName"
//                   value={formData.middleName}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 Last Name:
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 About Yourself:
//                 <textarea
//                   name="aboutYourself"
//                   value={formData.aboutYourself}
//                   onChange={handleInputChange}
//                 ></textarea>
//               </label>
//               <br />
//               <button type="submit">Update Personal Info</button>
//             </form>
//           </div>
//         );
//       case "WorkProfile":
//         return (
//           <div>
//             <h2>Work Profile</h2>
//             <form onSubmit={handlePersonalInfoSubmit}>
//               <label>
//                 Designation:
//                 <input
//                   type="text"
//                   name="designation"
//                   value={formData.designation}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 Contact:
//                 <input
//                   type="text"
//                   name="contact"
//                   value={formData.contact}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 Email:
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 Status:
//                 <input
//                   type="text"
//                   name="status"
//                   value={formData.status}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <button type="submit">Update Work Profile</button>
//             </form>
//           </div>
//         );
//       case "Document":
//         return (
//           <div>
//             <h2>Document</h2>
//             <ul>
//               <li>
//                 PAN Card:{" "}
//                 <button onClick={() => handleDocumentToggle("pancard")}>
//                   View Document
//                 </button>
//                 {visibleDocument === "pancard" && (
//                   <iframe
//                     src={document}
//                     width="100%"
//                     height="500px"
//                   ></iframe>
//                 )}
//               </li>
//               <li>
//                 Aadhar Card:{" "}
//                 <button onClick={() => handleDocumentToggle("aadharcard")}>
//                   View Document
//                 </button>
//                 {visibleDocument === "aadharcard" && (
//                   <iframe
//                     src="/documents/aadharcard.jpg"
//                     width="100%"
//                     height="500px"
//                   ></iframe>
//                 )}
//               </li>
//               <li>
//                 PDF Document:{" "}
//                 <button onClick={() => handleDocumentToggle("document")}>
//                   View Document
//                 </button>
//                 {visibleDocument === "document" && (
//                   <iframe
//                     src="/documents/document.pdf"
//                     width="100%"
//                     height="500px"
//                   ></iframe>
//                 )}
//               </li>
//               <li>
//                 Graduation Document:{" "}
//                 <button onClick={() => handleDocumentToggle("graduation")}>
//                   View Document
//                 </button>
//                 {visibleDocument === "graduation" && (
//                   <iframe
//                     src="/documents/graduation.pdf"
//                     width="100%"
//                     height="500px"
//                   ></iframe>
//                 )}
//               </li>
//             </ul>
//           </div>
//         );
//       case "BankingDetails":
//         return (
//           <div>
//             <h2>Banking Details</h2>
//             <form>
//               <label>
//                 Bank Name:
//                 <input type="text" value={formData.bankName} readOnly />
//               </label>
//               <br />
//               <label>
//                 Account Number:
//                 <input type="text" value={formData.accountNumber} readOnly />
//               </label>
//               <br />
//               <label>
//                 IFSC Code:
//                 <input type="text" value={formData.ifscCode} readOnly />
//               </label>
//               <br />
//             </form>
//           </div>
//         );
//       default:
//         return <div>Select a step</div>;
//     }
//   };

//   return (
//     <div className="employee-profile">
//       <div className="employee-header">
//         <div className="profile-left">
//           <img className="profile-logo" src={avatar} alt="Profile" />
//           <div>
//             <h1>Employee Profile</h1>
//             <p>{formData.name}</p>
//             <div className="employee-info">
//               <div className="employee-profile-card">
//                 <p>
//                   <strong>Employee ID:</strong> {formData.employeeId}
//                 </p>
//                 <p>
//                   <strong>Designation:</strong> {formData.designation}
//                 </p>
//                 <p>
//                   <strong>Contact:</strong> {formData.contact}
//                 </p>
//                 <p>
//                   <strong>Email:</strong> {formData.email}
//                 </p>
//                 <p>
//                   <strong>Status:</strong> {formData.status}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="step-navigation">
//         <button
//           className={currentStep === "PersonalData" ? "active" : ""}
//           onClick={() => setCurrentStep("PersonalData")}
//         >
//           Personal Data
//         </button>
//         <button
//           className={currentStep === "WorkProfile" ? "active" : ""}
//           onClick={() => setCurrentStep("WorkProfile")}
//         >
//           Work Profile
//         </button>
//         <button
//           className={currentStep === "Document" ? "active" : ""}
//           onClick={() => setCurrentStep("Document")}
//         >
//           Document
//         </button>
//         <button
//           className={currentStep === "BankingDetails" ? "active" : ""}
//           onClick={() => setCurrentStep("BankingDetails")}
//         >
//           Banking Details
//         </button>
//       </div>

//       <div className="step-content">{renderStep()}</div>
//     </div>
//   );
// };

// export default EmployeeProfile;

// import React, { useState, useEffect } from "react";
// import avatar from "../../../Assets/avatar.png";
// import "./Profile.css";
// import doc from '../../../Assets/ash.pdf'

// const EmployeeProfile = () => {
//   const [currentStep, setCurrentStep] = useState("PersonalData");
//   const [formData, setFormData] = useState({
//     employeeId: "123456",
//     name: "John Doe",
//     designation: "Software Engineer",
//     contact: "+1234567890",
//     email: "john.doe@example.com",
//     status: "Active",
//     manager: "Jane Smith",
//     department: "Engineering",
//     salutation: "Mr.",
//     firstName: "John",
//     middleName: "Korapati",
//     lastName: "Doe",
//     aboutYourself: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     bankName: "Bank of Example",
//     accountNumber: "1234567890123456",
//     ifscCode: "EXAMPL0001234",
//   });
//   const [visibleDocument, setVisibleDocument] = useState(null);
//   const [documentContent, setDocumentContent] = useState(null);

//   const handlePersonalInfoSubmit = (e) => {
//     e.preventDefault();
//     console.log("Personal info updated:", formData);
//     // You can add logic here to update backend or perform necessary actions
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const fetchDocument = async (documentName) => {
//     try {
//       const response = await fetch(`/documents/${documentName}`);
//       if (response.ok) {
//         const blob = await response.blob();
//         const url = URL.createObjectURL(blob);
//         setDocumentContent(url);
//       } else {
//         console.error("Failed to fetch document");
//       }
//     } catch (error) {
//       console.error("Error fetching document:", error);
//     }
//   };

//   const handleDocumentToggle = (documentName) => {
//     if (visibleDocument === documentName) {
//       setVisibleDocument(null);
//       setDocumentContent(null);
//     } else {
//       setVisibleDocument(documentName);
//       fetchDocument(documentName);
//     }
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case "PersonalData":
//         return (
//           <div>
//             <h2>Personal Data</h2>
//             <form onSubmit={handlePersonalInfoSubmit}>
//               <label>
//                 Employee ID:
//                 <input type="text" value={formData.employeeId} readOnly />
//               </label>
//               <br />
//               <label>
//                 Salutation:
//                 <input
//                   type="text"
//                   name="salutation"
//                   value={formData.salutation}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 First Name:
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 Middle Name:
//                 <input
//                   type="text"
//                   name="middleName"
//                   value={formData.middleName}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 Last Name:
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 About Yourself:
//                 <textarea
//                   name="aboutYourself"
//                   value={formData.aboutYourself}
//                   onChange={handleInputChange}
//                 ></textarea>
//               </label>
//               <br />
//               <button type="submit">Update Personal Info</button>
//             </form>
//           </div>
//         );
//       case "WorkProfile":
//         return (
//           <div>
//             <h2>Work Profile</h2>
//             <form onSubmit={handlePersonalInfoSubmit}>
//               <label>
//                 Designation:
//                 <input
//                   type="text"
//                   name="designation"
//                   value={formData.designation}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 Contact:
//                 <input
//                   type="text"
//                   name="contact"
//                   value={formData.contact}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 Email:
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <label>
//                 Status:
//                 <input
//                   type="text"
//                   name="status"
//                   value={formData.status}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <br />
//               <button type="submit">Update Work Profile</button>
//             </form>
//           </div>
//         );
//       case "Document":
//         return (
//           <div>
//             <h2>Document</h2>
//             <ul>
//               <li>
//                 PAN Card:{" "}
//                 <button onClick={() => handleDocumentToggle("pancard.pdf")}>
//                   View Document
//                 </button>
//                 {visibleDocument === "pancard.pdf" && documentContent && (
//                   <iframe
//                     src={documentContent}
//                     width="100%"
//                     height="500px"
//                   ></iframe>
//                 )}
//               </li>
//               <li>
//                 Aadhar Card:{" "}
//                 <button onClick={() => handleDocumentToggle("aadharcard.jpg")}>
//                   View Document
//                 </button>
//                 {visibleDocument === "aadharcard.jpg" && documentContent && (
//                   <iframe
//                     src={documentContent}
//                     width="100%"
//                     height="500px"
//                   ></iframe>
//                 )}
//               </li>
//               <li>
//                 PDF Document:{" "}
//                 <button onClick={() => handleDocumentToggle("document.pdf")}>
//                   View Document
//                 </button>
//                 {visibleDocument === "document.pdf" && documentContent && (
//                   <iframe
//                     src={documentContent}
//                     width="100%"
//                     height="500px"
//                   ></iframe>
//                 )}
//               </li>
//               <li>
//                 Graduation Document:{" "}
//                 <button onClick={() => handleDocumentToggle("graduation.pdf")}>
//                   View Document
//                 </button>
//                 {visibleDocument === "graduation.pdf" && documentContent && (
//                   <iframe
//                     // src={documentContent}
//                     src={doc}
//                     width="100%"
//                     height="500px"
//                   ></iframe>
//                 )}
//               </li>
//             </ul>
//           </div>
//         );
//       case "BankingDetails":
//         return (
//           <div>
//             <h2>Banking Details</h2>
//             <form>
//               <label>
//                 Bank Name:
//                 <input type="text" value={formData.bankName} readOnly />
//               </label>
//               <br />
//               <label>
//                 Account Number:
//                 <input type="text" value={formData.accountNumber} readOnly />
//               </label>
//               <br />
//               <label>
//                 IFSC Code:
//                 <input type="text" value={formData.ifscCode} readOnly />
//               </label>
//               <br />
//             </form>
//           </div>
//         );
//       default:
//         return <div>Select a step</div>;
//     }
//   };

//   return (
//     <div className="employee-profile">
//       <div className="employee-header">
//         <div className="profile-left">
//           <img className="profile-logo" src={avatar} alt="Profile" />
//           <div>
//             <h1>Employee Profile</h1>
//             <p>{formData.name}</p>
//             <div className="employee-info">
//               <div className="employee-profile-card">
//                 <p>
//                   <strong>Employee ID:</strong> {formData.employeeId}
//                 </p>
//                 <p>
//                   <strong>Designation:</strong> {formData.designation}
//                 </p>
//                 <p>
//                   <strong>Contact:</strong> {formData.contact}
//                 </p>
//                 <p>
//                   <strong>Email:</strong> {formData.email}
//                 </p>
//                 <p>
//                   <strong>Status:</strong> {formData.status}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="step-navigation">
//         <button
//           className={currentStep === "PersonalData" ? "active" : ""}
//           onClick={() => setCurrentStep("PersonalData")}
//         >
//           Personal Data
//         </button>
//         <button
//           className={currentStep === "WorkProfile" ? "active" : ""}
//           onClick={() => setCurrentStep("WorkProfile")}
//         >
//           Work Profile
//         </button>
//         <button
//           className={currentStep === "Document" ? "active" : ""}
//           onClick={() => setCurrentStep("Document")}
//         >
//           Document
//         </button>
//         <button
//           className={currentStep === "BankingDetails" ? "active" : ""}
//           onClick={() => setCurrentStep("BankingDetails")}
//         >
//           Banking Details
//         </button>
//       </div>

//       <div className="step-content">{renderStep()}</div>
//     </div>
//   );
// };

// export default EmployeeProfile;


import React, { useState } from "react";
import avatar from "../../../Assets/avatar.png";
import "./Profile.css";
import doc from '../../../Assets/ash.pdf';

const EmployeeProfile = () => {
  const [currentStep, setCurrentStep] = useState("PersonalData");
  const [formData, setFormData] = useState({
    employeeId: "123456",
    name: "John Doe",
    designation: "Software Engineer",
    contact: "+1234567890",
    email: "john.doe@example.com",
    status: "Active",
    ReportsTo: "Jane Smith",
    department: "Engineering",
    salutation: "Mr.",
    firstName: "John",
    middleName: "Korapati",
    lastName: "Doe",
    aboutYourself: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bankName: "Bank of Example",
    accountNumber: "1234567890123456",
    ifscCode: "EXAMPL0001234",
  });
  const [visibleDocument, setVisibleDocument] = useState(null);
  const [documentContent, setDocumentContent] = useState(null);

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    console.log("Personal info updated:", formData);
    // You can add logic here to update backend or perform necessary actions
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchDocument = async (documentName) => {
    try {
      const response = await fetch(`/documents/${documentName}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setDocumentContent(url);
      } else {
        console.error("Failed to fetch document");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  const handleDocumentToggle = (documentName) => {
    if (visibleDocument === documentName) {
      setVisibleDocument(null);
      setDocumentContent(null);
    } else {
      setVisibleDocument(documentName);
      fetchDocument(documentName);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "PersonalData":
        return (
          <div>
            <h2>Personal Data</h2>
            <form onSubmit={handlePersonalInfoSubmit}>
              <label>
                Employee ID:
                <input type="text" value={formData.employeeId} readOnly />
              </label>
              <br />
              <label>
                Salutation:
                <input
                  type="text"
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Middle Name:
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                About Yourself:
                <textarea
                  name="aboutYourself"
                  value={formData.aboutYourself}
                  onChange={handleInputChange}
                ></textarea>
              </label>
              <br />
              <button type="submit">Update Personal Info</button>
            </form>
          </div>
        );
      case "WorkProfile":
        return (
          <div>
            <h2>Work Profile</h2>
            <p><strong>Designation:</strong> {formData.designation}</p>
            <p><strong>Contact:</strong> {formData.contact}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Status:</strong> {formData.status}</p>
          </div>
        );
      case "Document":
        return (
          <div>
            <h2>Document</h2>
            <ul>
              <li>
                PAN Card:{" "}
                <button onClick={() => handleDocumentToggle("pancard.pdf")}>
                  View Document
                </button>
                {visibleDocument === "pancard.pdf" && documentContent && (
                  <iframe
                    src={documentContent}
                    width="100%"
                    height="500px"
                  ></iframe>
                )}
              </li>
              <li>
                Aadhar Card:{" "}
                <button onClick={() => handleDocumentToggle("aadharcard.jpg")}>
                  View Document
                </button>
                {visibleDocument === "aadharcard.jpg" && documentContent && (
                  <iframe
                    src={documentContent}
                    width="100%"
                    height="500px"
                  ></iframe>
                )}
              </li>
              <li>
                PDF Document:{" "}
                <button onClick={() => handleDocumentToggle("document.pdf")}>
                  View Document
                </button>
                {visibleDocument === "document.pdf" && documentContent && (
                  <iframe
                    src={documentContent}
                    width="100%"
                    height="500px"
                  ></iframe>
                )}
              </li>
              <li>
                Graduation Document:{" "}
                <button onClick={() => handleDocumentToggle("graduation.pdf")}>
                  View Document
                </button>
                {visibleDocument === "graduation.pdf" && documentContent && (
                  <iframe
                    src={doc}
                    width="100%"
                    height="500px"
                  ></iframe>
                )}
              </li>
            </ul>
          </div>
        );
      case "BankingDetails":
        return (
          <div>
            <h2>Banking Details</h2>
            <form>
              <label>
                Bank Name:
                <input type="text" value={formData.bankName} readOnly />
              </label>
              <br />
              <label>
                Account Number:
                <input type="text" value={formData.accountNumber} readOnly />
              </label>
              <br />
              <label>
                IFSC Code:
                <input type="text" value={formData.ifscCode} readOnly />
              </label>
              <br />
            </form>
          </div>
        );
      case "Reports":
        return (
          <div>
            <h2>Reports</h2>
            <p><strong>Reports To</strong> {formData.ReportsTo}</p>
          </div>
        );
      default:
        return <div>Select a step</div>;
    }
  };

  return (
    <div className="employee-profile">
      <div className="employee-header">
        <div className="profile-left">
          <img className="profile-logo" src={avatar} alt="Profile" />
          <div>
            <h1>Employee Profile</h1>
            <p>{formData.name}</p>
            <div className="employee-info">
              <div className="employee-profile-card">
                <p>
                  <strong>Employee ID:</strong> {formData.employeeId}
                </p>
                <p>
                  <strong>Designation:</strong> {formData.designation}
                </p>
                <p>
                  <strong>Contact:</strong> {formData.contact}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Status:</strong> {formData.status}
                </p>
                <p>
                  <strong>Reports To:</strong> {formData.ReportsTo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step-navigation">
        <button
          className={currentStep === "PersonalData" ? "active" : ""}
          onClick={() => setCurrentStep("PersonalData")}
        >
          Personal Data
        </button>
        <button
          className={currentStep === "WorkProfile" ? "active" : ""}
          onClick={() => setCurrentStep("WorkProfile")}
        >
          Work Profile
        </button>
        <button
          className={currentStep === "Document" ? "active" : ""}
          onClick={() => setCurrentStep("Document")}
        >
          Document
        </button>
        <button
          className={currentStep === "BankingDetails" ? "active" : ""}
          onClick={() => setCurrentStep("BankingDetails")}
        >
          Banking Details
        </button>
        <button
          className={currentStep === "Reports" ? "active" : ""}
          onClick={() => setCurrentStep("Reports")}
        >
          Reports
        </button>
      </div>

      <div className="step-content">{renderStep()}</div>
    </div>
  );
};

export default EmployeeProfile;
