import { handleExpandOrCollapseForm } from '@/utils/utils';
import React, { useEffect, useRef } from 'react';
import Overlay from '../Overlay';

interface Props {
  title?: string;
  visible: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  width: number;
  height: number;
}

const Modal = ({ title, visible, onClose, children, width, height }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      handleExpandOrCollapseForm({
        visible,
        formRef: modalRef,
        displayType: 'flex',
        collapseHeight: `${height - 20}px`,
        collapseWidth: `${width - 20}px`,
        expandHeight: `${height}px`,
        expandWidth: `${width}px`,
      });
    }
  }, [visible]);

  return (
    <>
      <Overlay visible={visible} onClose={onClose} />
      <div
        ref={modalRef}
        className={`fixed flex-col rounded-md p-4 gap-2 hidden bg-[white] z-50 transition-all duration-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
      >
        <div className="w-full flex justify-between items-center">
          <h3 className="text-[17px] font-medium">{title}</h3>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-[18px] text-[#999] cursor-pointer fa-solid fa-xmark"
          />
        </div>
        <div>{children}</div>
        <div></div>
      </div>
    </>
  );
};

export default Modal;
