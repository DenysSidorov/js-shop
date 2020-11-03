import React from 'react';
import './confirmBlock.less';

interface IConfirmBlock {
  okHandler: Function;
  cancelHandler: Function;
  unmountConfirm: Function;
  children?: React.ReactNode;
}

const ConfirmBlock = ({okHandler, cancelHandler, unmountConfirm, children}: IConfirmBlock) => {
  return (
    <div className='confirmBlockForUser'>
      <span className='confirmBlockForUser__content_btn_close' onClick={() => unmountConfirm()}>
        <i className='fa fa-times' aria-hidden='true' />
      </span>
      <div className='confirmBlockForUser__content'>
        {children}
        <div className='confirmBlockForUser__content_btn'>
          <span onClick={() => okHandler()} className='confirmBlockForUser__content_btn_ok'>
            Ок
          </span>
          <span onClick={() => cancelHandler()} className='confirmBlockForUser__content_btn_cancel'>
            Отмена
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBlock;
