import React, {FC} from 'react';
import {Route, Switch} from 'react-router-dom';
import MainMenu from '../modules/main-menu/MainMenu';
// import CategoryMenu from './category-menu/CategoryMenu';
import SocialMedia from '../modules/social-media-buttons/SocialMedia';
import FooterSection from '../parts/footer/FooterSection';
import MainContent from '../modules/main-content/MainContent';
import Home from './shop/home/Home';
import AboutUs from './shop/about-us/AboutUs';
import Blog from './shop/blog/Blog';
import PaymentAndDelivery from './shop/payment-and-delivery/PaymentAndDelivery';
import CashbackAndExchange from './shop/cashback-and-exchange/CashbackAndExchange';
import OrderPage from './shop/order/index';
import AfterOrder from './shop/after-order/AfterOrder';
import CardPage from './shop/card/Card';
// import Profile from '../pages/Profile';
import Contacts from './shop/contacs/Contacts';
// import Login from '../pages/Login';
// import Logup from '../pages/Logup';
// import VerifyEmail from '../pages/VerifyEmail';
// import VerifyUser from '../panel/auth/VerifyUser';

import NotFound from './shop/not-found/NotFound';
// import RouteAuth from '../helpers/RouteAuth';

const ShopWrapper: FC = (props: any) => {
  return (
    <div className='wrapper'>
      <div className='content'>
        {/* <ConfirmBlock/> */}
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
              {/* <RouteAuth path='/profile' component={Profile} /> */}
              {/* <Route path='/login' component={Login} /> */}
              {/* <Route path='/logup' component={Logup} /> */}
              {/* <Route path='/verify-email' component={VerifyEmail} /> */}
              {/* <Route path='/verify-user' component={VerifyUser} /> */}
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

export default ShopWrapper;
