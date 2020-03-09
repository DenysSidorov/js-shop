import React, {Component} from 'react';
import './index.scss';
import ModalPortalReact from "../modal-portal";

class BasicModalWindowPB extends Component {

  timeHideShow = 300;

  componentWillReceiveProps(nextProps) {
    if (nextProps.randomNumber !== this.props.randomNumber) {
      this.close();
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.toggleViewClasses();
    }, 0);
  }

  toggleViewClasses = () => {
    this.contentHtml.classList.toggle('basicModalWindowPBMax');
    this.containerHtml.classList.toggle('basicModalWindowPBContainerMax');
  }

  close = () => {
    this.toggleViewClasses();
    setTimeout(() => {
      this.props.close();
    }, this.timeHideShow);
  }

  _clickOutside = (ev) => {
    if (ev.target.className.indexOf('basicModalWindowPB ') !== -1) {
      this.close();
      // this.toggleViewClasses();
      // setTimeout(() => {
      //   this.props.close();
      // }, this.timeHideShow);
    }
  }

  render() {
    return (
      <ModalPortalReact>
        <div className="basicModalWindowPB basicModalWindowPBContainerMin"
             style={{zIndex: 9999999}}
             onClick={this._clickOutside}
             ref={(val) => this.containerHtml = val}
        >
          <div className="basicModalWindowPB__cont basicModalWindowPBMin"
               ref={(val) => this.contentHtml = val}
               style={{
                 height: this.props.height ? this.props.height : '',
                 width: this.props.width ? this.props.width : '40vw',
                 maxWidth: this.props.maxWidth ? this.props.maxWidth : ''
               }}
          >
            <i className="fa fa-times basicModalWindowPB_close" onClick={this.close}></i>
            {this.props.children}
          </div>
        </div>
      </ModalPortalReact>
    );
  }
}

export default BasicModalWindowPB;