import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const ModalPortalReact = ({children}: {children?: React.ReactNode}) => {
  const [containerEl] = useState(document.createElement('div'));

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      modalRoot.appendChild(containerEl);
    }
    return () => {
      const modalRootUnmount = document.getElementById('modal-root');
      if (modalRootUnmount) {
        modalRootUnmount.removeChild(containerEl);
      }
    };
  }, []);

  return ReactDOM.createPortal(children, containerEl);
};

export default ModalPortalReact;
