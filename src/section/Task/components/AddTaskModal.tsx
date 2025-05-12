import Modal from '@/components/Modal';
import React from 'react';
import AddTaskForm from '@/section/Task/components/AddTaskForm';

interface Props {
  visible: boolean;
  onClose: () => void;
}

sdfds;

const AddTaskModal = ({ visible, onClose }: Props) => {
  return (
    <Modal title="Add New Task" visible={visible} onClose={onClose}>
      <AddTaskForm />
    </Modal>
  );
};

export default AddTaskModal;
