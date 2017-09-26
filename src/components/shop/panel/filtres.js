import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
class Filters extends Component{

    render(){
        console.log(this.props.panelReducer);
        return (
            <div className="adminPan__mainContent_content_filters">
                <div className="adminPan__filters_item">
                    <div className="adminPan__filters_item_log colorGreen">
                        <i className="fa fa-shopping-cart"></i>
                    </div>
                    <div className="adminPan__filters_item_text">
                        <div className="adminPan__filters_item_text_count">{this.props.countTypes.new} шт.</div>
                        <div className="adminPan__filters_item_text_desk">Новых покупок</div>
                    </div>
                </div>

                <div className="adminPan__filters_item">
                    <div className="adminPan__filters_item_log colorYellow">
                        <i className="fa fa-spinner"></i>
                    </div>
                    <div className="adminPan__filters_item_text">
                        <div className="adminPan__filters_item_text_count">{this.props.countTypes.progress} шт.</div>
                        <div className="adminPan__filters_item_text_desk">В обработке</div>
                    </div>
                </div>

                <div className="adminPan__filters_item">
                    <div className="adminPan__filters_item_log colorViolet">
                        <i className="fa fa-truck"></i>
                    </div>
                    <div className="adminPan__filters_item_text">
                        <div className="adminPan__filters_item_text_count">{this.props.countTypes.delivery} шт.</div>
                        <div className="adminPan__filters_item_text_desk">В пути</div>
                    </div>
                </div>

                <div className="adminPan__filters_item">
                    <div className="adminPan__filters_item_log colorRed">
                        <i className="fa fa-check-square-o"></i>
                    </div>
                    <div className="adminPan__filters_item_text">
                        <div className="adminPan__filters_item_text_count">{this.props.countTypes.done} шт.</div>
                        <div className="adminPan__filters_item_text_desk">Завершено</div>
                    </div>
                </div>

                <div className="adminPan__filters_item">
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
                </div>
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
    },dispatch)
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Filters);
