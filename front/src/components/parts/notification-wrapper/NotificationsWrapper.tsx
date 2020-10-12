import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import Notifications from 'react-notification-system-redux';
import {IReducersState} from '../../../redux/reducers';

interface INotificationsWrap {}

const NotificationsWrapper: FC<INotificationsWrap> = () => {
  const notifications: Array<any> = useSelector((state: IReducersState) => state.notifications);
  return <Notifications notifications={notifications} />;
};

export default NotificationsWrapper;
