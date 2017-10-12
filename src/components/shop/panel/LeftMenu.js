import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
class LeftMenu extends Component{
    render(){
        return (  <div className="adminPan__mainContent_menu leftMenuSection left">
            <div className="adminPan__menu_item">
                <i className="fa fa-credit-card"></i>
                <Link to="/panel"className="adminPan__menu_item_text">Заказы</Link>
                {this.props.countTypes.new ? <span className="adminPan__menu_item_count"><span>{this.props.countTypes.new}</span></span> : null}
            </div>
            <div className="adminPan__menu_item">
                <i className="fa fa-flag-checkered" ></i>
                <Link to="/panel/admin" className="adminPan__menu_item_text">Admin Info</Link>
            </div>
            <div className="adminPan__menu_item">
                <i className="fa fa-flag-checkered" ></i>
                <Link to="/panel/test" className="adminPan__menu_item_text">Test Route</Link>
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
