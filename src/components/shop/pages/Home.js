import React from "react";
import axios from "axios";
import urlApi from "../../../api/urlApi";
import linkParams from "../helpers/lib/queryParams";
import CardsSection from "../modules/CardsSection";
import TagsMainSection from "../modules/TagsMainSection";
import MenuInfoSection from "../modules/MenuInfoSection";
import SimilarGoodsSection from "../modules/SimilarGoodsSection";
class Home extends React.Component {
    state = {cards: [], popularCards: [], uniqCategory: []};

    async componentWillReceiveProps(prevProps) {
        console.log('componentWillReceiveProps');
        this.setState({cards: []}, async ()=>{
            window.scrollTo(0, 0)
            // получение обьекта параметров запроса
            var params = linkParams;
            var param = params['sort'];

            var cards = [];
            try {
                if (param) {
                    cards = await axios.get(`${urlApi}/api/goods?sort=${param}`);
                } else{
                    cards = await axios.get(`${urlApi}/api/goods`);
                }
            } catch (e) {
                console.log(e);
            } finally {
                this.setState({
                    count: cards.data.count,
                    cards: cards.data.goods,
                },)
            }
        })
    }

    async componentDidMount(prevProps) {
        window.scrollTo(0, 0)
        var params = linkParams;
        var param = params['sort'];
        var cards = [];
        var popularCards = [];
        var uniqCategory = [];
        try {
            if (param) {
                cards = await axios.get(`${urlApi}/api/goods?sort=${param}`);
            } else {
                 cards = await axios.get(`${urlApi}/api/goods`);
            }
            popularCards = await axios.get(`${urlApi}/api/goods/popular`);
            uniqCategory = await axios.get(`${urlApi}/api/goods/tags`);
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({
                count: cards.data.count,
                cards: cards.data.goods,
                popularCards: popularCards.data,
                uniqCategory: uniqCategory.data
            })
        }
    }

    render() {
        return (
            <div>

                <MenuInfoSection/>
                {this.state.uniqCategory && this.state.uniqCategory.length
                    ? <TagsMainSection uniqCategory={this.state.uniqCategory}/>
                    : null}
                {this.state.cards && this.state.cards.length
                    ? <CardsSection count={this.state.count} cards={this.state.cards}/>
                    : null}

                {!this.state.cards.length
                    ? <div className="adminPanelSpinner"><i className="fa fa-spinner"></i></div>
                    : null}

                {/*<AdditionalSection/>*/}

                {this.state.popularCards && this.state.popularCards.length
                    ? <SimilarGoodsSection cards={this.state.popularCards} title={'Популярные'}/>
                    : null}
            </div>
        )
    }
}

export default Home;