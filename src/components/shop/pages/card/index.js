import React from "react";
import axios from "axios";
import st from './index.less';
import urlApi from '../../../../api/urlApi';
import MainContainerForCard from "./MainContainerForCard";
import SimilarGoodsSection from "../../modules/SimilarGoodsSection";
import ContainerForCardAdditional from "./ContainerForCardAdditional";
class CardComponent extends React.Component {
    state = {card: null, similarCategory: [], popularCards: []};
constructor(props){
    super(props);
    this.initCadd = this.initCadd.bind(this);

}
    async initCadd(){
        window.scrollTo(0, 0)
        var id = this.props.match.params.id;
        var similarCategory = [];
        var popularCards = [];
        var card;
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
        // https://www.npmjs.com/package/axios
        try {
            popularCards = await axios.get(`${urlApi}/api/goods/popular`);
            card = await axios.get(`${urlApi}/api/goods/${id}`);
            //console.log(card.data[0].category, 'cards');
            similarCategory = await axios.post(`${urlApi}/api/goods/${id}/similar`,
                {params: {'category': card.data[0].category}}
            );
            // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({
                card: card.data,
                similarCategory: similarCategory.data,
                popularCards: popularCards.data
            });
        }
    }
     componentDidMount() {
         //console.log('componentDidMount');
        this.initCadd();
    }

    componentWillReceiveProps() {
        // console.log('componentWillReceiveProps');
        this.forceUpdate();
        this.initCadd();
    }
    render() {
        var {card} = this.state;
        return (
            <div>
                {card
                    ? <div>

                    <MainContainerForCard card={this.state.card}/>
                    {this.state.similarCategory && this.state.similarCategory.length
                        ? <SimilarGoodsSection cards={this.state.similarCategory} title={'Похожие'}/>
                        : null}
                    {this.state.popularCards && this.state.popularCards.length
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