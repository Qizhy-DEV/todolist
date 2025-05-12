import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface Props {
  visible: boolean;
  onClose: () => void;
}

const Overlay = ({ visible, onClose }: Props) => {
  const overlayRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const overlayElement = overlayRef.current;

    if (!overlayElement) return;

    if (visible) {
      overlayElement.style.display = 'block';
      setTimeout(() => {
        overlayElement.style.opacity = '1';
      }, 200);
    } else {
      overlayElement.style.opacity = '0';
      const timeout = setTimeout(() => {
        overlayElement.style.display = 'none';
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  return (
    <section
      onClick={onClose}
      ref={overlayRef}
      className="w-screen opacity-0 h-screen fixed z-40 transition-all duration-500 top-0 left-0 bg-[#00000030]"
    />
  );
};

export default Overlay;
