import Modal from '@/components/Modal';
import React from 'react';
import UpdateTaskForm from './UpdateTaskForm';
import { Task } from '@/components/Providers/TaskProvider';

interface Props {
  currentTask: Task | undefined;
  visible: boolean;
  onClose: () => void;
}

const UpdateTaskModal = ({ visible, onClose, currentTask }: Props) => {
  return (
    <Modal title="Update Task" visible={visible} onClose={onClose}>
      <UpdateTaskForm task={currentTask} />
    </Modal>
  );
};

export default UpdateTaskModal;
