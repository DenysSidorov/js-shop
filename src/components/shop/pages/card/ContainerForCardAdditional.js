import React from "react";
import Comment from "./Comment";
import Card from '../../modules/CardMainPage'


class ContainerForCardAdditional extends React.Component {
    componentDidMount(prevProps) {

    }

    render() {
        var card = this.props.card[0];
        return (
            <div className="containerForCardAdditional">

                {/*TABS LIBRARRY TOP*/}

                <div className="mainCardContainer__tabs">
                    <input id="mainCardContainer__tabs_tab1" type="radio" name="tabs" defaultChecked/>
                    <label htmlFor="mainCardContainer__tabs_tab1" title="Вкладка 1">ОБЗОР</label>

                    <input id="mainCardContainer__tabs_tab2" type="radio" name="tabs"/>
                    <label htmlFor="mainCardContainer__tabs_tab2" title="Вкладка 2">РЕКОМЕНДУЕМ</label>

                    <input id="mainCardContainer__tabs_tab3" type="radio" name="tabs"/>
                    <label htmlFor="mainCardContainer__tabs_tab3" title="Вкладка 3">ОТЗЫВЫ</label>


                    <section id="mainCardContainer__tabs_content-tab1">
                        <div className="containerInTabs">
                            {/*Содержимое таба*/}

                            <div><p>{card['desc-full']}</p></div>


                            {/*Содержимое таба*/}
                        </div>
                    </section>
                    <section id="mainCardContainer__tabs_content-tab2">
                        {/*<Card/>*/}
                        <div className="containerInTabs">
                            {this.props.popularCards.map((el)=>{
                                return <Card key={el._id} card={el} />
                            })}
                            <div className="bodyCardItems__oneCardItem">

                                <div className="oneCardItem__headCard">
                                    <div className="oneCardItem__headCard__priceCard">
                                        <span>879</span><span></span>&nbsp;<span>$</span>
                                    </div>
                                    <div className="oneCardItem__headCard__nameBrand">Reebok, model test-1000 21 12321
                                        312 3123
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
                                    <img src={`/img-static/${card.photo[0]}`} alt=""/>
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
                            </div>
                        </div>
                    </section>
                    <section id="mainCardContainer__tabs_content-tab3">
                        <div className="containerInTabs">
                            {!card.comments.length
                                ? <div>Комментариев нет</div>
                                : card.comments.map((el, index)=> {
                                return <Comment key={el._id} comment={el}/>
                            })
                            }

                        </div>
                    </section>
                </div>


                {/*TABS LIBRARRY BOTTOM*/}

            </div>

        )

    }
}

export default ContainerForCardAdditional;

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}