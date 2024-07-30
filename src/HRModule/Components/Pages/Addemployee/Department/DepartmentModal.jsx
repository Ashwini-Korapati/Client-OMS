import React from 'react';
import { Modal } from 'antd';
import DepartmentForm from '../Department/DepartmentForm'

const DepartmentModal = ({ visible, onClose, onFinish, departments, setDepartments }) => {
  const handleFormFinish = (values) => {
    setDepartments(values); // Update the departments
    if (onFinish) onFinish(values); // Notify parent
  };

  return (
    <Modal
      title="Manage Departments"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <DepartmentForm
        onFinish={handleFormFinish}
        existingDepartments={departments} // Pass existing departments if needed
      />
    </Modal>
  );
};

export default DepartmentModal;
