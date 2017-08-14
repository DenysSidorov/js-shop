import React from "react";
import MenuInfoSection from "../../modules/MenuInfoSection";
import WaysDevPay from "./WaysDevPay";
import GoodsTable from "./GoodsTable";
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
        }
        return (
            <div style={styles}>
                <MenuInfoSection/>
                <div className="formOrderMain">
                    <GoodsTable/>
                    <WaysDevPay/>
                </div>
            </div>


        )

    }
}

export default Order;
{/*<div style={{display: 'flex', flexWrap: 'wrap'}}>*/
}
{/*<MenuInfoSection/></div>*/
}