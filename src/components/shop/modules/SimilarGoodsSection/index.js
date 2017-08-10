import React from "react";
import {Link} from "react-router-dom";
import styles from './index.less'
import styles2 from './slick-slider.less'

class SimilarGoodsSection extends React.Component {

    // hook for update component
    state = {counter : 0, isUpdateted: false}
    componentDidMount(){
        console.log('componentDidMount');
        if(!this.state.isUpdateted){
            var c = ++this.state.counter;
            setTimeout(()=>{
                this.setState({counter: c }, console.log('1'))
            }, 1000)
        }

    }

    componentWillUpdate() {
        var slickContainerSimilarGoods = $('.slickContainerSimilarGoods');
        console.log(slickContainerSimilarGoods);
        if (slickContainerSimilarGoods.length) {
            console.log('Da');
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
                {cards.length ?  <h2 className="similarGoodsTitle">{this.props.title || 'Похожие товары'}</h2> :null}
                <div className="slickContainerSimilarGoods">
                    {cards.length
                        ? cards.map((el)=>{
                            return <div key={el._id} className="bodyCardItems__oneCardItem">
                            <div className="oneCardItem__headCard">
                                <div className="oneCardItem__headCard__priceCard">
                                    <span>879</span><span></span>&nbsp;<span>$</span>
                                </div>
                                <div className="oneCardItem__headCard__nameBrand">Reebok, model test-1000 21 12321 312
                                    3123
                                    123 123
                                    12321
                                </div>
                                <div className="oneCardItem__headCard__wrap-things">
                                    <div className="oneCardItem__headCard__otherThings">
                                        <i className="fa fa-heart"></i>
                                        <span className="oneCardItem__headCard__otherThings_like"> 123</span>
                                    </div>
                                    <div className="oneCardItem__headCard__view">
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                        <span className="oneCardItem__headCard__view_items"> 123</span>
                                    </div>
                                </div>
                            </div>

                            <div className="oneCardItem__imageBody">
                                <img src="img-static/00017.jpg" alt=""/>
                            </div>

                            <div className="oneCardItem__bottomCard">
                                <div className="oneCardItem__bottomCard__shortText">
                                    <span className="oneCardItem__bottomCard__shortText_dots">Короткое описание товара, очень крутое описание овара, купи меня, я очень вкусный товар, бесплатно почти, с большой скидкой, давай, давайКороткое описание товара, очень крутое описание овара, купи меня, я очень вкусный товар, бесплатно почти, с большой скидкой, давай, давайКороткое описание товара, очень крутое описание овара, купи меня, я очень вкусный товар, бесплатно почти, с большой скидкой, давай, давай</span>
                                </div>
                                <div className="oneCardItem__bottomCard__status">В наличии</div>
                                <div className="oneCardItem__bottomCard__buy"><span>В КОРЗИНУ</span></div>
                            </div>

                            <div className="oneCardItem__bottomCard_sale"><span>-15%</span></div>
                            <div className="oneCardItem__bottomCard_new">NEW<span></span></div>
                        </div>})
                        : null}
                </div>
            </div>

        )
    }
}

export default SimilarGoodsSection;







