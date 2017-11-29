import React from "react";
import axios from "axios";
import urlApi from "../../../api/urlApi";
import CardsSection from "../modules/CardsSection";
import TagsMainSection from "../modules/TagsMainSection";
import MenuInfoSection from "../modules/MenuInfoSection";
import SimilarGoodsSection from "../modules/SimilarGoodsSection";
class Home extends React.Component {
    state = {cards: [], popularCards: [], uniqCategory: []};

    async componentWillReceiveProps(prevProps) {
        this.setState({cards: []})
        window.scrollTo(0, 0)
        // получение обьекта параметров запроса
        var params = window
            .location
            .search
            .replace('?', '')
            .split('&')
            .reduce(
                function (p, e) {
                    var a = e.split('=');
                    p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                    return p;
                },
                {}
            );
        var param = params['sort'];
        if (param) {
            var cards = [];
            try {
                cards = await axios.get(`${urlApi}/api/goods?sort=${param}`);

            } catch (e) {
                console.log(e);
            } finally {
                this.setState({
                    count: cards.data.count,
                    cards: cards.data.goods,
                }, ()=> {
                })
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
            .replace('?', '')
            .split('&')
            .reduce(
                function (p, e) {
                    var a = e.split('=');
                    p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
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
            if (param) {
                cards = await axios.get(`${urlApi}/api/goods?sort=${param}`);
                // cards = response.goods;
                // count = response.count;
            } else {
                 cards = await axios.get(`${urlApi}/api/goods`);
                // cards = response.goods;
                // count = response.count;
            }
            popularCards = await axios.get(`${urlApi}/api/goods/popular`);
            uniqCategory = await axios.get(`${urlApi}/api/goods/tags`);
            // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
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
                {/*<HomeReduxExample />*/}
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