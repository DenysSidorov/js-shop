import React from "react";
import CardsSection from '../modules/CardsSection';
import TagsMainSection from '../modules/TagsMainSection';
import MenuInfoSection from '../modules/MenuInfoSection';
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
            </div>
        )
    }
}

export default Home;