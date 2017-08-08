import React from "react";
import CardMainPage from './CardMainPage';
class CardsSection extends React.Component {

    render() {
        return (
            <div className="cardSection left fullWidth ">
                <div className="container">
                    <div className="productsCardBlock">
                        <div className="productsCardBlock__navigation"></div>
                        <div className="productsCardBlock__searchCard"></div>
                        <div className="productsCardBlock__bodyCardItems">
                            <CardMainPage/>
                            <CardMainPage/>
                            <CardMainPage/>
                            <CardMainPage/>
                            <CardMainPage/>
                            <CardMainPage/>
                            <CardMainPage/>
                            <CardMainPage/>
                            <CardMainPage/>
                            <CardMainPage/>
                            <CardMainPage/>
                            <CardMainPage/>
                            <CardMainPage/>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardsSection;