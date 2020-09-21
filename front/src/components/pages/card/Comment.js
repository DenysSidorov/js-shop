import React from "react";
import st from './comment.less';
class Comment extends React.Component {
// TODO add comments in db

    async componentDidMount(prevProps) {

    }

    render() {
        var {comment} = this.props;
        return (
            <div className="commentContainerInCard">
                <div className="commentContainerInCard_body">
                    <div className="commentContainerInCard_body-info">
                        <span style={{float: 'left', color: '#9c9c9c'}}>{comment.name || 'Incognito'} </span>
                        <span style={{marginLeft: '20px', color: '#9c9c9c'}}>{comment.date || '2000.01.01'}</span>
                    </div>
                    <div className="commentContainerInCard_body-main">{'  '}{comment.message}</div>
                </div>


            </div>
        )

    }
}

export default Comment;