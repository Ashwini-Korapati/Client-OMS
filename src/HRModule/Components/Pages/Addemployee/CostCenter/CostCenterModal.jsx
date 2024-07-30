

import React from 'react';
import { Modal } from 'antd';
import CostCenterForm from '../CostCenter/CostCenterForm'

const CostCenterModal = ({ visible, onClose, onFinish, costCenters, setCostCenters }) => {
  const handleFormFinish = (values) => {
    setCostCenters(values); // Update the cost centers
    if (onFinish) onFinish(values); // Notify parent
  };

  return (
    <Modal
      title="Manage Cost Centers"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <CostCenterForm
        onFinish={handleFormFinish}
        existingCenters={costCenters} // Pass existing centers if needed
      />
    </Modal>
  );
};

export default CostCenterModal;
