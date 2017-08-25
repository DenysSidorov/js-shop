import React from "react";
import MenuInfoSection from "../../modules/MenuInfoSection";
import WaysDevPay from "./WaysDevPay";
import GoodsTable from "./GoodsTable";
import {connect} from "react-redux";
class Order extends React.Component {
    state = {};

    constructor(props) {
        super(props);
        this.initCadd = this.initCadd.bind(this);

    }

    async initCadd() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        this.initCadd();
    }

    render() {
        var styles = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'column'
        };
        let goods = this.props.cart;
        return (
            <div style={styles}>
                <MenuInfoSection/>
                {!goods.length
                    ? <div style={{padding: '30px'}}>
                    <span style={{fontSize: '2rem'}}>Корзина пуста!</span>
                </div>
                    : <div className="formOrderMain">
                    <GoodsTable/>
                    <WaysDevPay {...this.props}/>
                </div> }

            </div>


        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart.items
    }
}
export default connect(mapStateToProps)(Order);
