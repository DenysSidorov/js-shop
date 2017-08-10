import React from "react";
import {Link} from "react-router-dom";
import styles from './index.less';
import styles2 from './slick-slider.less';
class SimilarGoodsSection extends React.Component {

    // hook for update component
    state = {counter: 0, isUpdateted: false};

    componentDidMount() {
        // console.log('componentDidMount');
        if (!this.state.isUpdateted && this.props.cards.length) {
            var c = ++this.state.counter;
            this.interval = setTimeout(()=> {
                this.setState({counter: c, isUpdateted: true })
            }, 1000)
        }
    }

    componentWillUpdate() {
        // console.log('componentWillUpdate');
        var slickContainerSimilarGoods = $('.slickContainerSimilarGoods');
        console.log(slickContainerSimilarGoods);
        if (slickContainerSimilarGoods.length) {
            // console.log('Da');
            $('.slickContainerSimilarGoods').slick({ // -----------------------slick slider #2---------------
                //dots: true,
                infinite: true,
                speed: 300,
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 5,
                slidesToScroll: 2,
                responsive: [
                    {
                        //breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            //dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });//все дети этого дива станут слайдами// -----------------------slick slider #2---------------
        }
    }

//TODO поменять на react
// https://github.com/akiran/react-slick


    render() {
        let {cards} = this.props;
        console.log('RENDER SIMILAR');
        return (

            <div className="similarGoodsContainer">
                {cards.length ? <h2 className="similarGoodsTitle">{this.props.title || 'Похожие товары'}</h2> : null}
                <div className="slickContainerSimilarGoods">
                    {cards.length
                        ? cards.map((card)=> {
                        return <div key={card._id} className="bodyCardItems__oneCardItem">
                            <div className="oneCardItem__headCard">
                                <div className="oneCardItem__headCard__priceCard">
                                    <span>{card.price}</span><span></span>&nbsp;<span>грн.</span>
                                </div>
                                <Link to={`/card/${card._id}`} className="oneCardItem__headCard__nameBrand">{card.name}{' '}{card.model}
                                </Link>
                                <div className="oneCardItem__headCard__wrap-things">
                                    <div className="oneCardItem__headCard__otherThings">
                                        <i className="fa fa-heart"></i>
                                        <span className="oneCardItem__headCard__otherThings_like"> {card.likes}</span>
                                    </div>
                                    <div className="oneCardItem__headCard__view">
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                        <span className="oneCardItem__headCard__view_items"> {card.views}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="oneCardItem__imageBody">
                                <img src="/img-static/00017.jpg" alt=""/>
                            </div>

                            <div className="oneCardItem__bottomCard">
                                <div className="oneCardItem__bottomCard__shortText">
                                    <span
                                        className="oneCardItem__bottomCard__shortText_dots">{card['desc-short']}</span>
                                </div>
                                <div
                                    className="oneCardItem__bottomCard__status">{card.isExists ? 'В наличии' : 'Нет в наличии'}</div>
                                <div className="oneCardItem__bottomCard__buy"><span>В КОРЗИНУ</span></div>
                            </div>
                            {card.sail ?
                                <div className="oneCardItem__bottomCard_sale"><span>-{card.sail}%</span></div> : null}
                            {card.isNewGood
                                ? <div className="oneCardItem__bottomCard_new">NEW<span></span></div>
                                : null
                            }
                        </div>
                    })
                        : null}
                    {cards.length
                        ? <div className="goToAllGoodsFromSimilar">
                        <a style={{color: "#eee"}} className="goToAllGoodsFromSimilar_text">Перейти ко всем похожим товарам</a>
                    </div>
                        : null}
                </div>
            </div>

        )
    }
}

export default SimilarGoodsSection;







