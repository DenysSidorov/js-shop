import React, {useCallback, useEffect, useRef, useState} from 'react';
import './index.scss';
import ModalPortalReact from '../modal-portal';

interface IBasicModalWindowPB {
  randomNumber: number;
  close: Function;
  children?: React.ReactNode;
  height?: string;
  width?: string;
  maxWidth?: string;
}

const BasicModalWindowPB = ({close, height, width, maxWidth, children}: IBasicModalWindowPB) => {
  const [timeHideShow] = useState(300);
  const contentHtml = useRef<HTMLDivElement>(null);
  const containerHtml = useRef<HTMLDivElement>(null);

  const toggleViewClasses = useCallback(() => {
    if (contentHtml.current) {
      contentHtml.current.classList.toggle('basicModalWindowPBMax');
    }

    if (containerHtml.current) {
      containerHtml.current.classList.toggle('basicModalWindowPBContainerMax');
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      toggleViewClasses();
    }, 0);
  }, []);

  const _close = useCallback(() => {
    toggleViewClasses();
    setTimeout(() => {
      close();
    }, timeHideShow);
  }, [toggleViewClasses, timeHideShow, close]);

  const clickOutside = useCallback(
    (event: any) => {
      const t: HTMLElement = event.target;
      if (t.className.indexOf('basicModalWindowPB ') !== -1) {
        _close();
      }
    },
    [_close]
  );

  return (
    <ModalPortalReact>
      <div
        className='basicModalWindowPB basicModalWindowPBContainerMin'
        style={{zIndex: 9999999}}
        onClick={clickOutside}
        ref={containerHtml}
      >
        <div
          className='basicModalWindowPB__cont basicModalWindowPBMin'
          ref={contentHtml}
          style={{
            height: height || '',
            width: width || '40vw',
            maxWidth: maxWidth || ''
          }}
        >
          <i className='fa fa-times basicModalWindowPB_close' onClick={_close} />
          {children}
        </div>
      </div>
    </ModalPortalReact>
  );
};

export default BasicModalWindowPB;
