import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
class LeftMenu extends Component{
    render(){
        return (  <div className="adminPan__mainContent_menu leftMenuSection left">
            <div className="adminPan__menu_item">
                <i className="fa fa-credit-card"></i>
                <span className="adminPan__menu_item_text">Заказы</span>
                <span className="adminPan__menu_item_count"><span>{this.props.countTypes.new}</span></span>
            </div>
            <div className="adminPan__menu_item">
                <i className="fa fa-sign-out" ></i>
                <Link to="/" className="adminPan__menu_item_text">Выйти</Link>
            </div>
        </div>)
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        countTypes: state.adminPanelReducer.countTypes
    }
}



export default connect(
    mapStateToProps, null
)(LeftMenu);
