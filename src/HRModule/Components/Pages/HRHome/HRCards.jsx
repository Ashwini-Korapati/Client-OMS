import { useState } from 'react';
import '../HRHome/HRCards.css'
// import emp from '..'
// import clients from '../../../../Assets/clientshr.png'
// import project from '../../../../Assets/projects.png'
import { Modal } from "react-bootstrap";
import AddEmployeeform from '../HRHome/AddEmployeeform'



const Perfcards = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="HR-dashboard">
      <div className="HR-card">
        <div className="HR-content">
          <h2>Attendance</h2>
          <p>13 </p>
                    <button className='view-btn'>View more</button>
        </div>
      
      </div>
      <div className="HR-card">
        <div className="HR-content">
          <h2>Leave Metrics</h2>
          <p>10</p>
          <button className='view-btn'>View more</button>
        </div>
       
      </div>
      <div className="HR-card">
        <div className="HR-content">
          <h2>Add Employee</h2>
          <p> 12</p>

          <button className='view-btn' onClick={handleShow}>Add Employee</button>

        </div>
       
      </div>


<Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <AddEmployeeform />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Perfcards;
