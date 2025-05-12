import { handleExpandOrCollapseForm } from '@/utils/utils';
import React, { useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';
import { useClickOutside } from '@/composables/useClickOutside';

interface Props {
  title?: string;
  visible: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  // width?: number;
  // height?: number;
}

const Modal = ({ title, visible, onClose, children, className }: Props) => {
  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: onClose,
    enabled: visible,
  });
  // const modalRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (modalRef.current) {
  //     handleExpandOrCollapseForm({
  //       visible,
  //       formRef: modalRef,
  //       displayType: 'flex',
  //     });
  //   }
  // }, [visible]);
  if (!visible) {
    return null;
  }

  return (
    <>
      <div
        // ref={modalRef}
        className={cn(
          'fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full ',
          'bg-[rgba(0,0,0,0.4)] z-50 transition-all duration-500'
        )}
      >
        <div ref={ref} className={cn('rounded-sm px-4 py-2 gap-2 bg-white w-lg shadow', className)}>
          <div className="w-full flex justify-between items-center">
            <h3 className="text-[17px] font-medium">{title}</h3>
            <button
              onClick={onClose}
              className="text-[18px] text-[#999] cursor-pointer fa-solid fa-xmark"
            />
          </div>
          <div>{children}</div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
