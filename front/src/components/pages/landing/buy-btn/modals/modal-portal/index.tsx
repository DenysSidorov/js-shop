import {Component} from 'react';
import ReactDOM from 'react-dom';

class ModalPortalReact extends Component {
  el: HTMLElement;

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
  }

  render() {
    const {children} = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

class ModalPortalReact2 extends Component {
  el: HTMLElement;

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
  }

  render() {
    const {children} = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
const ar = [];
ar.push(ModalPortalReact2);

export default ModalPortalReact;
