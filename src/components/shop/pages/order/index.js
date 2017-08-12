import React from "react";

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

        return (
            <div>order</div>
        )

    }
}

export default Order;