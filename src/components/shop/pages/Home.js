import React from "react";
import CardsSection from '../modules/CardsSection';
class Home extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <CardsSection/>
            </div>
        )
    }
}

export default Home;