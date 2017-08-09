import React from "react";
import MainContainerForCard from "./MainContainerForCard";
import SimilarGoodsSection from "../../modules/SimilarGoodsSection";
import ContainerForCardAdditional from "./ContainerForCardAdditional";

class Card extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <MainContainerForCard/>
                <SimilarGoodsSection/>
                <ContainerForCardAdditional/>



                <div>CARD</div>
            </div>

        )

    }
}

export default Card;