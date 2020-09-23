import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {IServiceRedecer} from '../../../redux/reducers/service-app';
import './index.scss';

const FooterSection = ({number1}: IServiceRedecer) => {
  return (
    <div className='footerSection left fullWidth '>
      <div className='container'>
        <div className='footerMainBlock'>
          <div className='footerMainBlock__titles'>
            <div className='strip_double' />
            <span>Телефоны для связи</span>
            <div className='strip_double' />
          </div>
          <div className='footerMainBlock__phones'>
            <span className='menu_one_telFooter'>
              <i className='fa fa-mobile' aria-hidden='true' />
              <a href={`tel:+${number1}`}>{number1}</a>
            </span>
            {/*        <span className="menu_one_telFooter"> */}
            {/*    <i className="fa fa-mobile" aria-hidden="true"> */}

            {/*    </i> */}
            {/*    <a href="tel:+0679083278">067-908-32-78</a> */}
            {/* </span> */}
          </div>

          <div className='footerMainBlock__titles'>
            <div className='strip_double' />
            <span>Узнавайте о новинках первыми</span>
            <div className='strip_double' />
          </div>
          <div className='footerMainBlock__socials'>
            {/* <span className="menu_one_soc"><i className="fa fa-facebook" aria-hidden="true"></i></span> */}
            {/* <span className="menu_one_soc"><i className="fa fa-twitter" aria-hidden="true"></i></span> */}
            {/* <span className="menu_one_soc"><i className="fa fa-google-plus" aria-hidden="true"></i></span> */}
            {/* <span className="menu_one_soc"><i className="fa fa-vk" aria-hidden="true"></i></span> */}
            <a href='https://www.instagram.com/doshki.kom/' target='_blank' className='menu_one_soc'>
              <i className='fa fa-instagram' aria-hidden='true' />
            </a>
          </div>

          <div className='footerMainBlock__titles'>
            <div className='strip_double' />
            <span>Дополнительная информация</span>
            <div className='strip_double' />
          </div>
          <div className='footerMainBlock__payment-delivery'>
            <div className='footerMainBlock__payment-delivery_menu'>
              <div className='contactMenuBlockFooter'>
                <ul className='contactMenuBlockFooter_main'>
                  <li className=''>
                    <Link to='/'>Главная</Link>
                  </li>
                  <li className=''>
                    <Link to='/about-us'>О нас</Link>
                  </li>
                  <li className=''>
                    <Link to='/payment-and-delivery'>Оплата и доставка</Link>
                  </li>
                  <li className=''>
                    <Link to='/cashback-and-exchange'>Возврат и обмен</Link>
                  </li>
                  {/* <li className=""><a>Блог</a></li> */}
                  <li className=''>
                    <Link to='/contacts'>Контакты</Link>
                  </li>
                </ul>
              </div>

              <div className='contactMenuBlockFooter'>
                {/* <ul className="contactMenuBlockFooter_main"> */}
                {/* <li className=""><a>Новинки</a></li> */}
                {/* <li className=""><a>Акции</a></li> */}
                {/* <li className=""><a>Скидки</a></li> */}
                {/* <li className=""><a>Популярное</a></li> */}
                {/* <li className=""><a>Детские</a></li> */}
                {/* <li className=""><a>Мужские</a></li> */}
                {/* </ul> */}
              </div>
              <div className='socribeBtnBlockFooter' />
            </div>

            <div className='footerMainBlock__socials_delivery'>
              <div className='imgFooterBlock'>
                <img className='imgFooter' src='/img-static/privatbank.png' alt='' />
              </div>
              <div className='imgFooterBlock'>
                <img className='nvpochta imgFooter' src='/img-static/navaposhta.png' alt='' />
              </div>
            </div>
          </div>
          <p className='footerMainBlock__payment-delivery_payment-afferta'>
            Украина, г. Одесса, тел. {number1}. Весь контент © 2017. Зазначені товарні знаки та продукція маркована
            знаками для товарів захищені авторським правом.
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    number1: state.serviceReducer.number1
  };
};

export default connect(mapStateToProps, null)(FooterSection);
