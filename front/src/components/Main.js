// import { hot } from 'react-hot-loader/root';
import React, {Component} from 'react';
import Test from './Test';
import './index.css';

class Main extends Component {
  state = {
    number: 1,
    b: 22
  };

  clickHandler = () => {
    this.setState((prevState) => ({
      number: prevState.number + prevState.b
    }));
  };

  render() {
    const {number} = this.state;
    return (
      <div>
        <p onClick={this.clickHandler}>++++</p>
        <h1>We just setup react with babel1. Test is -{number}</h1>
        <Test
          aasdadadadsdas={21}
          dfsafsafsadfsfb={6}
          sadffsafsaasc={723414412}
          aasdadadadsda2s={21}
          dfsafsaf2sadfsfb={6}
          sadffsaf2saasc={72341412}
        >
          sdf
        </Test>
      </div>
    );
  }
}

export default Main;
