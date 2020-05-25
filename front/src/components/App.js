import { hot } from 'react-hot-loader/root';
import React, {Component} from 'react';
import './index.css';


class App extends Component {
  constructor(p){
    super(p);
    this.state = {
      number: 1,
      a:2,
      b:3
    }
  }


  render(){
    const a = this.state.a;
    const b = this.state.b;
    const number = this.state.number;
    return (
      <div>
        <h1 onClick={()=>this.setState({number : this.state.number + 1})}>+++</h1>
        <h1>We just setup react with babel. Test is {number}</h1>
      </div>
    );
  }
};

export default hot(App);
