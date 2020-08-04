// import { hot } from 'react-hot-loader/root';
import React, {Component, MouseEvent} from 'react';
// import Test from './Test';
import './index.css';
import './index2.scss';
import './index3.less';
import TestComp from './Test';
// import b from './burger.jpg';
// import ts from './index2.tsx';

// console.log(ts);

type MainState = {
  number: number;
};

class Main extends Component<MainState> {
  // state = {
  //   number: 1
  // };

  componentDidMount(): void {
    this.setNumber();
  }

  clickHandler = () => {
    // this.setState((prevState) => ({
    //   number: prevState.number + prevState.b
    // }));
  };

  setNumber = () => {
    setTimeout(() => {
      // this.setState({number: 5555555});
    }, 2000);
  };

  handleClick = (event: MouseEvent) => {
    alert(event.currentTarget.tagName);
  };

  render() {
    const {number, children} = this.props;
    return (
      <div>
        <p onClick={this.clickHandler}>++++</p>
        <h1>We just setup react with babel1. Test is -{number}</h1>
        <div className='dfdf'>23</div>
        <div className='aaa' onClick={this.handleClick} role='button' tabIndex={-1}>
          1234
        </div>
        <TestComp value={5}>ha-ha</TestComp>
        {children}
      </div>
    );
  }
}

export default Main;
