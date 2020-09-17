import React from 'react';
import './confirmBlock.less';

interface IConfirmBlock {
  okHandler: Function;
  cancelHandler: Function;
  unmountConfirm: Function;
}

class ConfirmBlock extends React.Component<IConfirmBlock> {
  okHandler() {
    this.props.okHandler();
  }

  cancelHandler() {
    this.props.cancelHandler();
  }

  closeComponet() {
    // this.props.cancelHandler();
    this.props.unmountConfirm();
  }

  render() {
    return (
      <div className='confirmBlockForUser'>
        <span className='confirmBlockForUser__content_btn_close' onClick={this.closeComponet.bind(this)}>
          <i className='fa fa-times' aria-hidden='true' />
        </span>
        <div className='confirmBlockForUser__content'>
          {this.props.children}
          <div className='confirmBlockForUser__content_btn'>
            <span onClick={this.okHandler.bind(this)} className='confirmBlockForUser__content_btn_ok'>
              Ок
            </span>
            <span onClick={this.cancelHandler.bind(this)} className='confirmBlockForUser__content_btn_cancel'>
              Отмена
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmBlock;
