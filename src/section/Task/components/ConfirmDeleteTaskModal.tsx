import ConfirmModal from '@/components/common/ConfirmModal';
import React from 'react';
import { Task, useTask } from '@/components/Providers/TaskProvider';

interface Props {
  visible: boolean;
  onClose: () => void;
  task?: Task;
}

const ConfirmDeleteTaskModal = ({ visible, onClose, task }: Props) => {
  const { removeTask } = useTask();

  if (!task) return;

  const handleDeleteTask = () => {
    removeTask(task.id);
  };

  return (
    <ConfirmModal title="Confirmation" visible={visible} onClose={onClose}>
      <div className="w-full h-full flex flex-col items-end gap-2">
        <p className="w-full text-[14px]">Are you sure about delete this task?</p>
        <div className="flex w-full justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="text-[14px] text-[white] bg-[red] px-4 py-2 rounded-md cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteTask}
            type="submit"
            className="text-[14px] text-[white] bg-[#5dade2] px-4 py-2 rounded-md cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </ConfirmModal>
  );
};

export default ConfirmDeleteTaskModal;
