import React from "react";
import { connect } from 'react-redux';
class AllPrice extends React.Component {


    render() {
        let goods = this.props.cart;

        return(
            <div className="allPriceForItems">
                <span className="allPriceForItems_text">ВСЕГО К ОПЛАТЕ:&nbsp;&nbsp;</span>
                <span className="allPriceForItems_price">3452</span>
                <span className="allPriceForItems_text">&nbsp;грн.</span>
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart.items
    }
}


export default connect(mapStateToProps, )(AllPrice);