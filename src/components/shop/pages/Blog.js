import React from "react";
import st from './pagesStyles/blog.scss';
import {setMetaTag, setTitle} from "../helpers/lib/utils";
class Blog extends React.Component {
    componentDidMount = (prevProps) => {
        window.scrollTo(0, 0)
        setTitle('Блог');
      setMetaTag('description', 'Блог о портфелях, сумках, рюбзаках, сумка для школы');
      setMetaTag('keywords', 'online-shop, сумках, рюбзаках, сумка для школы, shop-ukraine.pro');
    }

    render = ()=>{
        return (
            <div className="blogPage-container">
                <p>Постов нет !</p>
            </div>
        )

    }
}

export default Blog;