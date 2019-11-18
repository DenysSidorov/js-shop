import React from "react";
import st from './pagesStyles/blog.scss';
import {setMetaTag, setTitle} from "../helpers/lib/utils";
class Blog extends React.Component {
    componentDidMount = (prevProps) => {
        window.scrollTo(0, 0)
        setTitle('Блог');
      setMetaTag('description', 'Блог о картинах на дереве, картины на досках в Украине');
      setMetaTag('keywords', 'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины');
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
