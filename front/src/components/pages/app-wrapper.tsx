import React, {FC} from 'react';
import {Route, Switch} from 'react-router-dom';
import MainMenu from '../modules/main-menu/MainMenu';
// import CategoryMenu from './category-menu/CategoryMenu';
import SocialMedia from '../modules/social-media-buttons/SocialMedia';
import FooterSection from '../parts/footer/FooterSection';
import MainContent from '../modules/main-content/MainContent';
import Home from './home/Home';
import AboutUs from './about-us/AboutUs';
import Blog from './blog/Blog';
import PaymentAndDelivery from './payment-and-delivery/PaymentAndDelivery';
import CashbackAndExchange from './cashback-and-exchange/CashbackAndExchange';
import OrderPage from './order/index';
import AfterOrder from './after-order/AfterOrder';
import CardPage from './card/Card';
import Profile from './profile/Profile';
import Contacts from './contacs/Contacts';
import Login from './login/Login';
import Logup from './logup/Logup';
import VerifyEmail from './verify-email/VerifyEmail';
import VerifyUser from './verify-user/VerifyUser';

import NotFound from './not-found/NotFound';
import RouteAuth from '../HOCs/RouteAuth';

const AppWrapper: FC = (props: any) => {
  return (
    <div className='wrapper'>
      <div className='content'>
        {/* <ConfirmBlock/> */}
        {/* tslint:disable-next-line */}
        <MainMenu {...props} />
        {/* <CategoryMenu/> */}
        <MainContent {...props}>
          <main>
            <Switch>
              <Route exact path='/shop' component={Home} />
              <Route path='/about-us' component={AboutUs} />
              <Route path='/payment-and-delivery' component={PaymentAndDelivery} />
              <Route path='/cashback-and-exchange' component={CashbackAndExchange} />
              <Route path='/great' component={AfterOrder} />
              <Route path='/order' component={OrderPage} {...props} />
              <Route path='/blog' component={Blog} />
              <Route path='/card/:id' component={CardPage} />
              <Route exact path='/contacts' component={Contacts} />
              <RouteAuth path='/profile' component={Profile} />
              <Route path='/login' component={Login} />
              <Route path='/logup' component={Logup} />
              <Route path='/verify-email' component={VerifyEmail} />
              <Route path='/verify-user' component={VerifyUser} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </MainContent>
      </div>
      <FooterSection />
      <SocialMedia />
    </div>
  );
};

export default AppWrapper;
