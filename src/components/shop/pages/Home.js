import React from "react";
import CardsSection from '../modules/CardsSection';
import TagsMainSection from '../modules/TagsMainSection';
import MenuInfoSection from '../modules/MenuInfoSection';
import AdditionalSection from '../modules/AdditionalSection';
import SimilarGoodsSection from '../modules/SimilarGoodsSection';
class Home extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <MenuInfoSection/>
                <TagsMainSection/>
                <CardsSection/>
                <AdditionalSection/>
                <SimilarGoodsSection title={'Популярные'}/>
            </div>
        )
    }
}

export default Home;