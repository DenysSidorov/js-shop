import React from "react";
import st from './index.less';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
class menuCart extends React.Component {

    render() {
        let {cart} = this.props;
        let count = 0;
        cart.forEach(el=> count = count + el.count)

        return (
            <Link to="/order" className="main-cart">
                <i className="fa fa-shopping-cart main-cart__ico" data-js_count={count}></i>
            </Link>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart.items
    }
}


export default connect(
    mapStateToProps,

)(menuCart);

