
// import React, { useState } from 'react';
// import { Radio, Form, Button, Upload, message, Modal, Carousel } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import AddEmployee from '../Addemployee';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSelectedOption, setFile, uploadFile } from '../../../../Redux/Slices/AddemployeeHomeSlice';
// import './AddemployeeHome.css';
// import excelimg from '../../../../Assets/Excelimg.png';
// import csvimg from '../../../../Assets/csvimg.png'; 
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AddemployeeHome = () => {
//   const dispatch = useDispatch();
//   const selectedOption = useSelector((state) => state.addEmployeeHome.selectedOption);
//   const fileStatus = useSelector((state) => state.addEmployeeHome.status);
//   const fileError = useSelector((state) => state.addEmployeeHome.error);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const handleRadioChange = (e) => {
//     dispatch(setSelectedOption(e.target.value));
//   };

//   const validateFile = (file) => {
//     const isExcelOrCsv = file.type.includes('sheet') || file.type.includes('csv');
//     if (!isExcelOrCsv) {
//       message.error('You can only upload Excel or CSV files!');
//     }
//     return isExcelOrCsv;
//   };

//   const handleFileUpload = (file) => {
//     if (validateFile(file)) {
//       dispatch(setFile(file));
//       dispatch(uploadFile({ file })); 
//     }
//   };

//   const beforeUpload = (file) => {
//     handleFileUpload(file);
//     return false; 
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   // Show toast notification based on file upload status
//   if (fileStatus === 'succeeded') {
//     toast.success('File uploaded successfully!');
//   } else if (fileStatus === 'failed') {
//     toast.error(`Error: ${fileError}`);
//   }

//   return (
//     <div className="addemployee-home">
//       <Form layout="vertical">
//         <div className="radio-container">
//           <Form.Item>
//             <Radio.Group onChange={handleRadioChange} value={selectedOption}>
//               <Radio value="addEmployee">Add Employee</Radio>
//               <Radio value="uploadFile">Add Bulk Employee</Radio>
//             </Radio.Group>
//           </Form.Item>
//         </div>
//         {selectedOption === 'addEmployee' && <AddEmployee />}
//         {selectedOption === 'uploadFile' && (
//           <div className="upload-section">
//             <Button type="link" onClick={showModal}>
//               Refer to these images before uploading
//             </Button>
//             <Modal
//               title="Reference Images"
//               visible={isModalVisible}
//               onOk={handleOk}
//               onCancel={handleCancel}
//               footer={null}
//               width={1200} 
//             >
//               <Carousel dots={true} arrows={true}>
//                 <div className="carousel-slide">
//                   <img src={excelimg} alt="Excel Reference" className="carousel-image" />
//                   <h3 className="carousel-heading">Excel Image</h3>
//                 </div>
//                 <div className="carousel-slide">
//                   <img src={csvimg} alt="CSV Reference" className="carousel-image" />
//                   <h3 className="carousel-heading">CSV Image</h3>
//                 </div>
//               </Carousel>
//               <Button onClick={handleCancel} type="primary" style={{ marginTop: '10px' }}>
//                 Close
//               </Button>
//             </Modal>
//             <Upload
//               name="upload"
//               customRequest={({ file }) => beforeUpload(file)}
//               showUploadList={false}
//             >
//               <Button icon={<UploadOutlined />}>Click to Upload</Button>
//             </Upload>
//             {fileStatus === 'uploading' && <p>Uploading...</p>}
//             <ToastContainer />
//           </div>
//         )}
//       </Form>
//     </div>
//   );
// };

// export default AddemployeeHome;

import React, { useState } from 'react';
import { Radio, Form, Button, Upload, message, Modal, Carousel } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import AddEmployee from '../Addemployee';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedOption, setFile, uploadFile } from '../../../../Redux/Slices/AddemployeeHomeSlice';
import './AddemployeeHome.css';
import excelimg from '../../../../Assets/Excelimg.png';
import csvimg from '../../../../Assets/csvimg.png'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddemployeeHome = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.addEmployeeHome.selectedOption);
  const fileStatus = useSelector((state) => state.addEmployeeHome.status);
  const fileError = useSelector((state) => state.addEmployeeHome.error);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRadioChange = (e) => {
    dispatch(setSelectedOption(e.target.value));
  };

  const validateFile = (file) => {
    const isExcelOrCsv = file.type.includes('sheet') || file.type.includes('csv');
    if (!isExcelOrCsv) {
      message.error('You can only upload Excel or CSV files!');
    }
    return isExcelOrCsv;
  };

  const handleFileUpload = (file) => {
    if (validateFile(file)) {
      dispatch(setFile(file));
      dispatch(uploadFile({ file })); 
    }
  };

  const beforeUpload = (file) => {
    handleFileUpload(file);
    return false; 
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Show toast notification based on file upload status
  React.useEffect(() => {
    if (fileStatus === 'succeeded') {
      toast.success('File uploaded successfully!');
    } else if (fileStatus === 'failed') {
      toast.error(`Error: ${fileError}`);
    }
  }, [fileStatus, fileError]);

  return (
    <div className="addemployee-home">
      <Form layout="vertical">
        <div className="radio-container">
          <Form.Item>
            <Radio.Group onChange={handleRadioChange} value={selectedOption}>
              <Radio value="addEmployee">Add Employee</Radio>
              <Radio value="uploadFile">Add Bulk Employee</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        {selectedOption === 'addEmployee' && <AddEmployee />}
        {selectedOption === 'uploadFile' && (
          <div className="upload-section">
            <Button type="link" onClick={showModal}>
              Refer to these images before uploading
            </Button>
            <Modal
              title="Reference Images"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              width={1200} 
            >
              <Carousel dots={true} arrows={true}>
                <div className="carousel-slide">
                  <img src={excelimg} alt="Excel Reference" className="carousel-image" />
                  <h3 className="carousel-heading">Excel Image</h3>
                </div>
                <div className="carousel-slide">
                  <img src={csvimg} alt="CSV Reference" className="carousel-image" />
                  <h3 className="carousel-heading">CSV Image</h3>
                </div>
              </Carousel>
              <Button onClick={handleCancel} type="primary" style={{ marginTop: '10px' }}>
                Close
              </Button>
            </Modal>
            <Upload
              name="upload"
              customRequest={({ file }) => beforeUpload(file)}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            {fileStatus === 'uploading' && <p>Uploading...</p>}
          </div>
        )}
      </Form>
      <ToastContainer />
    </div>
  );
};

export default AddemployeeHome;








