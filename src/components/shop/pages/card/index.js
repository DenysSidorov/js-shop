import React from "react";
import MainContainerForCard from "./MainContainerForCard";

class Card extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <MainContainerForCard/>


                <div>CARD</div>
            </div>

        )

    }
}

export default Card;