import React from 'react';
import { Modal } from 'antd';
import CompanyForm from '../Company/CompanyForm'

const CompanyModal = ({ visible, onClose, onFinish, companies, setCompanies }) => {
  const handleFormFinish = (values) => {
    setCompanies(values); // Update the companies
    if (onFinish) onFinish(values); // Notify parent
  };

  return (
    <Modal
      title="Manage Companies"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <CompanyForm
        onFinish={handleFormFinish}
        existingCompanies={companies} // Pass existing companies if needed
      />
    </Modal>
  );
};

export default CompanyModal;
