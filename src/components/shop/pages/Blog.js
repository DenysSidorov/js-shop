import React from "react";
import st from './blog.scss';
class Blog extends React.Component {
        componentDidMount(prevProps) {
                window.scrollTo(0, 0)
        }
    render() {
        return (
         <div className="blogPage-container">
                        <p>Постов нет !</p>
         </div>
        )

    }
}

export default Blog;