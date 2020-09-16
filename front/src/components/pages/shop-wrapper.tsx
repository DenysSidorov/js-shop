import React, {FC} from 'react';
import {Route} from 'react-router-dom';
import MainMenu from '../modules/main-menu/MainMenu';
// import CategoryMenu from './category-menu/CategoryMenu';
import SocialMedia from '../modules/social-media-buttons/SocialMedia';
import FooterSection from '../parts/footer/FooterSection';
import MainContent from '../modules/main-content/MainContent';
import Home from './shop/home/Home';
// import AboutUs from '../pages/AboutUs';
// import Blog from '../pages/Blog';
// import PaymentAndDelivery from '../pages/PaymentAndDelivery';
// import CashbackAndExchange from '../pages/CashbackAndExchange';
import OrderPage from '../pages/shop/order/index';
// import AfterOrder from '../pages/AfterOrder';
import CardPage from '../pages/shop/card/Card';
// import Profile from '../pages/Profile';
// import Contacts from '../pages/Contacts';
// import Login from '../pages/Login';
// import Logup from '../pages/Logup';
// import VerifyEmail from '../pages/VerifyEmail';
// import VerifyUser from '../panel/auth/VerifyUser';

// import NotFound from '../pages/NotFound';
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
            {/* <Switch> */}
            <Route exact path='/shop' component={Home} />
            {/* <Route path='/about-us' component={AboutUs} /> */}
            {/* <Route path='/payment-and-delivery' component={PaymentAndDelivery} /> */}
            {/* <Route path='/cashback-and-exchange' component={CashbackAndExchange} /> */}
            <Route exact path='/order' component={OrderPage} />
            {/* <Route path='/blog' component={Blog} /> */}
            <Route path='/card/:id' component={CardPage} />
            {/* <Route exact path='/great' component={AfterOrder} /> */}
            {/* <Route exact path='/contacts' component={Contacts} /> */}
            {/* <RouteAuth path='/profile' component={Profile} /> */}
            {/* <Route path='/login' component={Login} /> */}
            {/* <Route path='/logup' component={Logup} /> */}
            {/* <Route path='/verify-email' component={VerifyEmail} /> */}
            {/* <Route path='/verify-user' component={VerifyUser} /> */}
            {/* <Route component={NotFound} /> */}
            {/* </Switch> */}
          </main>
        </MainContent>
      </div>
      <FooterSection />
      <SocialMedia />
    </div>
  );
};

export default ShopWrapper;
