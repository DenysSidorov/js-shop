import React from "react";
import styles from './index.less'
class TagsMainSection extends React.Component {
    render() {
        return (
            <div className="itemsSection left fullWidth ">
                <div className="container">
                    <div className="themeItemsblock">
                        <span className="themeItemsblock__oneItem"><a href="">Новинки</a></span>
                        <span className="themeItemsblock__oneItem"><a href="">Акция</a></span>
                        <span className="themeItemsblock__oneItem"><a href="">Скидки</a></span>
                        <span className="themeItemsblock__oneItem"><a href="">Популярные</a></span>
                        <span className="themeItemsblock__oneItem"><a href="">Мужские</a></span>
                        <span className="themeItemsblock__oneItem"><a href="">Женские</a></span>
                        <span className="themeItemsblock__oneItem"><a href="">Детские</a></span>
                        <span className="themeItemsblock__oneItem"><a href="">Спорт</a></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TagsMainSection;

