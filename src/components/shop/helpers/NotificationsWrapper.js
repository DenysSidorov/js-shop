import React from 'react';
import {connect} from 'react-redux';
import Notifications from 'react-notification-system-redux';


class NotificationsWrapper extends React.Component{
  render(){
    return (
      <Notifications
        notifications={this.props.notifications}
        // style={style}
      />
    )
  }
}

export default connect(
  state => ({ notifications: state.notifications })
)(NotificationsWrapper);