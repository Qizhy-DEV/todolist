interface FormParamsInterface {
  formRef: React.RefObject<HTMLElement | null>;
  visible: boolean;
  expandHeight?: string;
  expandWidth?: string;
  collapseHeight?: string;
  collapseWidth?: string;
  displayType: string;
}

export const handleExpandOrCollapseForm = ({
  formRef,
  visible,
  expandHeight,
  expandWidth,
  collapseHeight,
  collapseWidth,
  displayType,
}: FormParamsInterface) => {
  const formElement = formRef.current;
  if (!formElement) return;

  if (visible) {
    formElement.style.display = displayType;
    setTimeout(() => {
      formElement.style.opacity = '1';
      if (expandHeight) {
        formElement.style.height = expandHeight;
      }
      if (expandWidth) {
        formElement.style.width = expandWidth;
      }
    }, 200);
  } else {
    formElement.style.opacity = '0';
    if (collapseHeight) {
      formElement.style.height = collapseHeight;
    }
    if (collapseWidth) {
      formElement.style.width = collapseWidth;
    }
    setTimeout(() => {
      formElement.style.display = 'none';
    }, 400);
  }
};
