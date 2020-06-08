// import { hot } from 'react-hot-loader/root';
import React, {Component} from 'react';
import Test from './Test';
import './index.css';
import './index2.scss';
import './index3.less';
// import b from './burger.jpg';
// import ts from './index2.tsx';

// console.log(ts);

class Main extends Component {
  state = {
    number: 1,
    b: 22
  };

  clickHandler = () => {
    // this.setState((prevState) => ({
    //   number: prevState.number + prevState.b
    // }));
  };

  render() {
    const {number, b} = this.state;
    return (
      <div>
        <p onClick={this.clickHandler}>++++</p>
        <h1>We just setup react with babel1. Test is -{number}</h1>
        <Test aasdadadadsdas={21 + b}>sdf</Test>
        <div className='dfdf'>23</div>
        <div className='aaa'>1234</div>
        {/*<img src={b} />*/}
        {/*<div>TS is = {ts}</div>*/}
      </div>
    );
  }
}

export default Main;
