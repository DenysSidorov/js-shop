import React, {Component, ReactNode} from 'react';
import './index.scss';
import ModalPortalReact from '../modal-portal';

interface IBasicModalWindowPB {
  randomNumber: number;
  close: Function;
  children: ReactNode;
  height?: string;
  width?: string;
  maxWidth?: string;
}

class BasicModalWindowPB extends Component<IBasicModalWindowPB, {}> {
  timeHideShow = 300;

  contentHtml: HTMLDivElement = document.createElement('div', {});

  containerHtml: HTMLDivElement = document.createElement('div', {});

  componentDidMount() {
    setTimeout(() => {
      this.toggleViewClasses();
    }, 0);
  }

  UNSAFE_componentWillReceiveProps(nextProps: {randomNumber: number}) {
    const {randomNumber} = this.props;
    if (nextProps.randomNumber !== randomNumber) {
      this.close();
    }
  }

  toggleViewClasses = () => {
    if (this.contentHtml) {
      this.contentHtml.classList.toggle('basicModalWindowPBMax');
    }

    if (this.containerHtml) {
      this.containerHtml.classList.toggle('basicModalWindowPBContainerMax');
    }
  };

  close = () => {
    const {close} = this.props;
    this.toggleViewClasses();
    setTimeout(() => {
      close();
    }, this.timeHideShow);
  };

  clickOutside = (event: any) => {
    const t: HTMLElement = event.target;
    if (t.className.indexOf('basicModalWindowPB ') !== -1) {
      this.close();
    }
  };

  render() {
    const {height, width, maxWidth, children} = this.props;
    return (
      <ModalPortalReact>
        <div
          className='basicModalWindowPB basicModalWindowPBContainerMin'
          style={{zIndex: 9999999}}
          onClick={this.clickOutside}
          ref={(val: HTMLDivElement) => {
            this.containerHtml = val;
          }}
        >
          <div
            className='basicModalWindowPB__cont basicModalWindowPBMin'
            ref={(val: HTMLDivElement) => {
              this.contentHtml = val;
            }}
            style={{
              height: height || '',
              width: width || '40vw',
              maxWidth: maxWidth || ''
            }}
          >
            <i className='fa fa-times basicModalWindowPB_close' onClick={this.close} />
            {children}
          </div>
        </div>
      </ModalPortalReact>
    );
  }
}

export default BasicModalWindowPB;
