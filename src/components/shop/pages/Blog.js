import React from "react";
import st from './pagesStyles/blog.scss';
import {setTitle} from "../helpers/lib/utils";
class Blog extends React.Component {
    componentDidMount = (prevProps) => {
        window.scrollTo(0, 0)
        setTitle('Блог');
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