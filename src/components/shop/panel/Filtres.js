import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getTypes}from '../../../reducers/panel/actions';
class Filters extends Component{
componentDidMount(){

    let token;
    try {
        token = localStorage.getItem("info");
    } catch (error) {
        console.error(error);
    }
    if(token){
        this.props.getType(token);
    }

}
    render(){
        return (
            <div  className="adminPan__mainContent_content_filters">
                <Link to='/panel?type=new' className="adminPan__filters_item">
                    <div className="adminPan__filters_item_log colorGreen">
                        <i className="fa fa-shopping-cart"></i>
                    </div>
                    <div className="adminPan__filters_item_text">
                        <div className="adminPan__filters_item_text_count">{this.props.countTypes.new} шт.</div>
                        <div className="adminPan__filters_item_text_desk">Новых покупок</div>
                    </div>
                </Link>


                <Link to='/panel?type=progress' className="adminPan__filters_item">
                    <div className="adminPan__filters_item_log colorYellow">
                        <i className="fa fa-spinner"></i>
                    </div>
                    <div className="adminPan__filters_item_text">
                        <div className="adminPan__filters_item_text_count">{this.props.countTypes.progress} шт.</div>
                        <div className="adminPan__filters_item_text_desk">В обработке</div>
                    </div>
                </Link>

                <Link to='/panel?type=delivery' className="adminPan__filters_item">
                    <div className="adminPan__filters_item_log colorViolet">
                        <i className="fa fa-truck"></i>
                    </div>
                    <div className="adminPan__filters_item_text">
                        <div className="adminPan__filters_item_text_count">{this.props.countTypes.delivery} шт.</div>
                        <div className="adminPan__filters_item_text_desk">В пути</div>
                    </div>
                </Link>

                <Link to='/panel?type=done' className="adminPan__filters_item">
                    <div className="adminPan__filters_item_log colorRed">
                        <i className="fa fa-check-square-o"></i>
                    </div>
                    <div className="adminPan__filters_item_text">
                        <div className="adminPan__filters_item_text_count">{this.props.countTypes.done} шт.</div>
                        <div className="adminPan__filters_item_text_desk">Завершено</div>
                    </div>
                </Link>

                <Link to='/panel' className="adminPan__filters_item">
                    <div className="adminPan__filters_item_log colorMain">
                        <i className="fa fa-money"></i>
                    </div>
                    <div className="adminPan__filters_item_text">
                        <div className="adminPan__filters_item_text_count">{this.props.countTypes.new
                        + this.props.countTypes.done
                        + this.props.countTypes.delivery
                        + this.props.countTypes.progress
                        } шт.</div>
                        <div className="adminPan__filters_item_text_desk">Все</div>
                    </div>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        countTypes: state.adminPanelReducer.countTypes
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        addItem: (item)=> pushToCart(item),
        changeKind : (kind)=> changeConfirm(kind),
        getType : (token)=> getTypes(token)
    },dispatch)
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Filters);