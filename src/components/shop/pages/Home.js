import React from "react";
import axios from "axios";
import CardsSection from "../modules/CardsSection";
import TagsMainSection from "../modules/TagsMainSection";
import MenuInfoSection from "../modules/MenuInfoSection";
import AdditionalSection from "../modules/AdditionalSection";
import SimilarGoodsSection from "../modules/SimilarGoodsSection";
import HomeReduxExample from "../helpers/HomeNewReduxExamp";
class Home extends React.Component {
    state = {cards: [], popularCards: [], uniqCategory: []};

    async componentWillReceiveProps(prevProps) {
        window.scrollTo(0, 0)
        // получение обьекта параметров запроса
        var params = window
            .location
            .search
            .replace('?','')
            .split('&')
            .reduce(
                function(p,e){
                    var a = e.split('=');
                    p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                    return p;
                },
                {}
            );
        var param = params['sort'];
        if(param){
            var cards = [];
            try {
                cards = await axios.get(`http://localhost:3000/api/goods?sort=${param}`);

            } catch (e) {
                console.log(e);
            } finally {
                this.setState({
                    cards: cards.data,
                }, ()=>{})
            }
        }

    }
    async componentDidMount(prevProps) {
        window.scrollTo(0, 0)
        window.scrollTo(0, 0);
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData

        var params = window
            .location
            .search
            .replace('?','')
            .split('&')
            .reduce(
                function(p,e){
                    var a = e.split('=');
                    p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                    return p;
                },
                {}
            );
        var param = params['sort'];

        // https://www.npmjs.com/package/axios
        var cards = [];
        var popularCards = [];
        var uniqCategory = [];
        try {
            if(param){
                cards = await axios.get(`http://localhost:3000/api/goods?sort=${param}`);
            } else {
                cards = await axios.get(`${window.location.origin}/api/goods`);
            }
            popularCards = await axios.get('http://localhost:3000/api/goods/popular');
            uniqCategory = await axios.get('http://localhost:3000/api/goods/tags');
            // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({
                cards: cards.data,
                popularCards: popularCards.data,
                uniqCategory: uniqCategory.data
            })
        }
    }

    render() {
        return (
            <div>

                <MenuInfoSection/>
                {/*<HomeReduxExample />*/}
                {this.state.uniqCategory && this.state.uniqCategory.length
                ? <TagsMainSection uniqCategory={this.state.uniqCategory}/>
                : null}
                {this.state.cards && this.state.cards.length
                  ? <CardsSection cards={this.state.cards}/>
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