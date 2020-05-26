// import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import './index.css';


class App extends Component {
  state = {
    number: 1,
    b: 2
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      number: prevState.number + prevState.b
    }));
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <p onClick={this.clickHandler}>++++</p>
        <h1>
          We just setup react with babel1. Test is
          {number}
        </h1>
      </div>
    );
  }
}

export default App;
