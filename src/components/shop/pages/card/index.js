import React from "react";
import axios from "axios";
import urlApi from "../../../../api/urlApi";
import MainContainerForCard from "./MainContainerForCard";
import SimilarGoodsSection from "../../modules/SimilarGoodsSection";
import ContainerForCardAdditional from "./ContainerForCardAdditional";
class CardComponent extends React.Component {
    state = {card: null, similarCategory: [], popularCards: []};

    constructor(props) {
        super(props);
        this.initCadd = this.initCadd.bind(this);
    }

    state = {card: []}

    async initCadd() {
        window.scrollTo(0, 0)
        var id = this.props.match.params.id;
        console.log(id, 'id');
        var similarCategory = [];
        var popularCards = [];
        var card;
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
        try {
            card = await axios.get(`${urlApi}/api/goods/${id}`);
            popularCards = await axios.get(`${urlApi}/api/goods/popular`);
            similarCategory = await axios.post(`${urlApi}/api/goods/${id}/similar`,
                {params: {'category': card.data[0].category}}
            );
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({
                card: card && card.data ? card.data : {},
                similarCategory: similarCategory && similarCategory.data ? similarCategory.data : [],
                popularCards: popularCards.data && popularCards.data ? popularCards.data : []
            });
        }
    }

    componentDidMount() {
        this.initCadd();
    }

    componentWillReceiveProps() {
        this.forceUpdate();
        this.initCadd();
    }

    render() {
        var {card} = this.state;
        console.log(card, 'CART');
        return (
            <div>
                {card.length
                    ? <div>

                    <MainContainerForCard card={this.state.card}/>
                    {this.state.similarCategory && this.state.similarCategory.length
                        ? <SimilarGoodsSection cards={this.state.similarCategory} title={'Похожие'}/>
                        : null}
                    {this.state.popularCards && this.state.popularCards.length && this.state.card.length
                        ? <ContainerForCardAdditional card={this.state.card}
                                                      popularCards={this.state.popularCards}/>
                        : null}

                </div>
                    : <div className="adminPanelSpinner"><i className="fa fa-spinner"></i></div>}
            </div>
        )
    }
}

export default CardComponent;