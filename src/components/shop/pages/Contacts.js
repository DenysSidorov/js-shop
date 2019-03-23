import React from "react";
import {setMetaTag, setTitle} from "../helpers/lib/utils";

class Contacts extends React.Component {
        componentDidMount(prevProps) {
                window.scrollTo(0, 0)
          setTitle('Контакты');
          setMetaTag('description', 'Онлайн магазин. Украина, г. Одесса. Телефон: 0936877613');
          setMetaTag('keywords', 'online-shop, интрнет магазин, возврат, обмен, портфели, сумки, рюкзаки, купить для школы, shop-ukraine.pro');

        }
    render() {
        return (
         <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Regular'}}>
            Онлайн магазин. Украина, г. Одесса. Телефон: 0936877613
         </div>
        )

    }
}

export default Contacts ;