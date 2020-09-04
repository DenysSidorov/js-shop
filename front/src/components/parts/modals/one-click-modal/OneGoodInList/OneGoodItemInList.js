import React, {Component} from 'react';
import './index.scss';

class OneGoodItemInList extends Component {

  render() {
    const good = this.props.good;
    return (
    <div className="oneGoodItemInList">{good.price}</div>
    );
  }
}

export default OneGoodItemInList;