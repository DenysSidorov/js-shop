import React from "react";
import { connect } from 'react-redux';
class AllPrice extends React.Component {


    render() {
        let goods = this.props.cart;
        let price = goods.reduce((prev, cur)=> prev + (((cur.price/100)*(100-cur.sail))*cur.count), 0);
        return(
            <div className="allPriceForItems">
                <span className="allPriceForItems_text">ВСЕГО К ОПЛАТЕ:&nbsp;&nbsp;</span>
                <span className="allPriceForItems_price">{price}</span>
                <span className="allPriceForItems_text">&nbsp;грн.</span>
                    <div>qweqw</div>
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