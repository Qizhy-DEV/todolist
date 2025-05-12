import React, { useEffect, useState } from 'react';
import { useTask } from '../../Providers/TaskProvider';
import Modal from '..';

interface Props {
  taskId: string | undefined;
  visible: boolean;
  title: string;
  subtitle: string;
  onClose: () => void;
}

const DeleteModal = ({ title, visible, subtitle, onClose, taskId }: Props) => {
  const { removeTask } = useTask();

  const onSubmit = () => {
    if (!taskId) return;
    removeTask(taskId);
    onClose();
  };

  return (
    <Modal width={400} height={130} onClose={onClose} title={title} visible={visible}>
      <div className="w-full h-full flex flex-col items-end gap-2">
        <p className="w-full text-[14px]">{subtitle}</p>
        <div className="flex w-full justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="text-[14px] text-[white] bg-[red] px-4 py-2 rounded-md cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            type="submit"
            className="text-[14px] text-[white] bg-[#5dade2] px-4 py-2 rounded-md cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
