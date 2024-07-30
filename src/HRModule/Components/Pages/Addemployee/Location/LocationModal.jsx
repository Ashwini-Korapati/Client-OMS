import React from 'react';
import { Modal } from 'antd';
import LocationForm from '../Location/LocationForm'

const LocationModal = ({ visible, onClose, onFinish, locations, setLocations }) => {
  const handleFormFinish = (values) => {
    setLocations(values); // Update the locations
    if (onFinish) onFinish(values); // Notify parent
  };

  return (
    <Modal
      title="Manage Locations"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <LocationForm
        onFinish={handleFormFinish}
        existingLocations={locations}
      />
    </Modal>
  );
};

export default LocationModal;
