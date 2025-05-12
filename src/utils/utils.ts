interface FormParamsInterface {
  formRef: React.RefObject<HTMLElement | null>;
  visible: boolean;
  expandHeight: string;
  expandWidth: string;
  collapseHeight: string;
  collapseWidth: string;
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
      formElement.style.height = expandHeight;
      formElement.style.width = expandWidth;
    }, 200);
  } else {
    formElement.style.opacity = '0';
    formElement.style.height = collapseHeight;
    formElement.style.width = collapseWidth;
    setTimeout(() => {
      formElement.style.display = 'none';
    }, 400);
  }
};
