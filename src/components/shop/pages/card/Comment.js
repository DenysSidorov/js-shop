import React from "react";

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
            <div>
                {comment.message}
                {/*{comment.length*/}
                    {/*? messages.map((el)=> {*/}
                    {/*return <div>*/}
                        {/*{el.message}*/}
                    {/*</div>})*/}
                    {/*: null*/}
                {/*}*/}
            </div>
        )

    }
}

export default Comment;