import { handleExpandOrCollapseForm } from '@/utils/utils';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { useClickOutside } from '@/composables/useClickOutside';

interface Props {
  title?: string;
  visible: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal = ({ title, visible, onClose, children, className }: Props) => {
  const [shouldRender, setShouldRender] = useState(visible);
  const [animate, setAnimate] = useState<string>('');

  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: onClose,
    enabled: shouldRender,
  });

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      setAnimate('fade-in');
    } else {
      setAnimate('fade-out');
      setTimeout(() => setShouldRender(false), 500);
    }
  }, [visible]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full ',
        'bg-[rgba(0,0,0,0.4)] z-50 transition-all duration-500 ',
        `animate-${animate}-overlay`
      )}
    >
      <div
        ref={ref}
        className={cn(
          'rounded-sm p-4 gap-2 flex flex-col bg-white w-lg shadow ',
          `animate-${animate}`
        )}
      >
        <div className="w-full flex justify-between items-center">
          <h3 className="text-[17px] font-medium">{title}</h3>
          <button
            onClick={onClose}
            className="text-[18px] text-[#999] cursor-pointer fa-solid fa-xmark"
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
