// import { Modal, Button, Input } from 'antd';
// import { useState } from 'react';

// const EditableFieldModal = ({ isVisible, onClose, fieldName, initialValue }) => {
//   const [value, setValue] = useState(initialValue);

//   const handleSave = () => {
//     console.log(`Updated value for ${fieldName}: ${value}`);
//     onClose();
//   };

//   return (
//     <Modal
//       title={`Edit ${fieldName}`}
//       visible={isVisible}
//       onOk={handleSave}
//       onCancel={onClose}
//     >
//       <Input value={value} onChange={(e) => setValue(e.target.value)} />
//     </Modal>
//   );
// };

// const SalaryComponent = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [editingField, setEditingField] = useState('');
//   const [fieldValue, setFieldValue] = useState('');

//   const handleEditClick = (field, initialValue) => {
//     setEditingField(field);
//     setFieldValue(initialValue);
//     setModalVisible(true);
//   };

//   const handleModalClose = () => {
//     setModalVisible(false);
//   };

//   return (
//     <div>
//       <div>
//         <span>Travel Allowance: 5000</span>
//         <EditOutlined style={{ marginLeft: 10 }} onClick={() => handleEditClick('Travel Allowance', 5000)} />
//       </div>
//       <div>
//         <span>Travel Working Days: 22</span>
//         <EditOutlined style={{ marginLeft: 10 }} onClick={() => handleEditClick('Travel Working Days', 22)} />
//       </div>
//       <div>
//         <span>Travel Present Days: 20</span>
//         <EditOutlined style={{ marginLeft: 10 }} onClick={() => handleEditClick('Travel Present Days', 20)} />
//       </div>
//       <div>
//         <span>PF: 1800</span>
//         <EditOutlined style={{ marginLeft: 10 }} onClick={() => handleEditClick('PF', 1800)} />
//       </div>

//       {/* Editable modal */}
//       <EditableFieldModal
//         isVisible={modalVisible}
//         onClose={handleModalClose}
//         fieldName={editingField}
//         initialValue={fieldValue}
//       />
//     </div>
//   );
// };

// export default SalaryComponent;
