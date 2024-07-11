// DeleteConfirmation.js
import React from 'react';
import { Modal, Button } from '@mantine/core';

const DeleteConfirmation = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="Confirm Deletion"
      size="sm"
      overlayOpacity={0.6}
    >
      <Modal.Body>
        Are you sure you want to delete this item?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="filled" color="red" onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmation;
