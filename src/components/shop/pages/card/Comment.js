import React from "react";
import styles from './comment.less';
class Comment extends React.Component {


    async componentDidMount(prevProps) {
        // window.scrollTo(0, 0)
        // var id = this.props.match.params.id;
        // // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
        // // https://www.npmjs.com/package/axios
        // var card = await axios.get(`http://localhost:3000/goods/${id}`);
        //
        // // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
        // this.setState({card: card.data});
        //
        // console.log(card.data[0]._id, 'ID CARD');
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