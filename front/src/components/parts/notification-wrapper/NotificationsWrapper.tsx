import React, {FC} from 'react';
import {connect} from 'react-redux';
import Notifications from 'react-notification-system-redux';

interface INotificationsWrap {
  notifications: Array<any>;
}

const NotificationsWrapper: FC<INotificationsWrap> = ({notifications}) => (
  <Notifications notifications={notifications} />
);

export default connect((state: any) => ({notifications: state.notifications}))(NotificationsWrapper);
