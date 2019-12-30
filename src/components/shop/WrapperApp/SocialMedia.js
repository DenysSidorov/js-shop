import React from "react";
import st from './socialMedia.less';
import {Link} from 'react-router-dom';

class SocialMedia extends React.Component {
    render() {
        return (
            <div className="socialMedia__container">
                <div className="fab">
  <span className="fab-action-button">
        <i className="fab-action-button__icon"></i>
    </span>
                    <ul className="fab-buttons">
                      <li className="fab-buttons__item">
                        <a href="https://www.instagram.com/doshki.kom/" target="_blank"
                           className="fab-buttons__link fab-buttons__link_inst" data-tooltip="Instagram">
                          {/*<i className="icon-material icon-material_fb"></i>*/}
                          <i className="fa fa-instagram main-cart__ico" ></i>
                        </a>
                      </li>
                        <li className="fab-buttons__item">
                            <Link to="/shop" href="#" className="fab-buttons__link" data-tooltip="Главная">
                                {/*<i className="icon-material icon-material_fb"></i>*/}
                                <i className="fa fa-home main-cart__ico" ></i>
                            </Link>
                        </li>
                        <li className="fab-buttons__item">
                            <Link to="/order" href="#" className="fab-buttons__link" data-tooltip="Корзина">
                                {/*<i className="icon-material icon-material_fb"></i>*/}
                                <i className="fa fa-shopping-cart main-cart__ico" ></i>
                            </Link>
                        </li>
                        {/*<li className="fab-buttons__item">*/}
                        {/*    <Link to="/profile" href="#" className="fab-buttons__link" data-tooltip="Профиль">*/}
                        {/*        /!*<i className="icon-material icon-material_fb"></i>*!/*/}
                        {/*        <i className="fa fa-user main-cart__ico" ></i>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className="fab-buttons__item">*/}
                            {/*<a href="#" className="fab-buttons__link" data-tooltip="Facebook">*/}
                                {/*<i className="icon-material icon-material_fb"></i>*/}
                            {/*</a>*/}
                        {/*</li>*/}
                        {/*<li className="fab-buttons__item">*/}
                            {/*<a href="#" className="fab-buttons__link" data-tooltip="Twitter">*/}
                                {/*<i className="icon-material icon-material_tw"></i>*/}
                            {/*</a>*/}
                        {/*</li>*/}
                        {/*<li className="fab-buttons__item">*/}
                            {/*<a href="#" className="fab-buttons__link" data-tooltip="Linkedin">*/}
                                {/*<i className="icon-material icon-material_li"></i>*/}
                            {/*</a>*/}
                        {/*</li>*/}
                        {/*<li className="fab-buttons__item">*/}
                            {/*<a href="#" className="fab-buttons__link" data-tooltip="Google+">*/}
                                {/*<i className="icon-material icon-material_gp"></i>*/}
                            {/*</a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>

        )

    }
}

export default SocialMedia;
