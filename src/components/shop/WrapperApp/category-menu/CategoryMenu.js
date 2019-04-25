import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.less';
import onClickOutside from 'react-onclickoutside';


class CategoryMenu extends React.Component {
  state = {
    isShowMenu: false
  }
  // mainContainerSection fullWidth left
  handleShowMenu = (bool) => {

    if (bool === undefined) {
      this.setState({isShowMenu: !this.state.isShowMenu}, () => {
        this.changeMainContainerOpacity(this.state.isShowMenu ? '0.5' : '1');
      });
    } else {
      this.setState({isShowMenu: bool});
      this.changeMainContainerOpacity(bool ? '0.5' : '1');
    }
  }

  changeMainContainerOpacity = (value) => {
    const mainConts = document.getElementsByClassName('mainContainerSection');
    if (mainConts && mainConts.length) {
      const mainCont = mainConts[0];
      mainCont.style.opacity = value;
    }
  }

  handleClickOutside = evt => {
    // Log.info('in component magic  act !!!');
    this.handleShowMenu(false);
    this.changeMainContainerOpacity('1')
  }

  render() {
    return (
      // <div className="categoryMenu fullWidth left">
      // <div className="container">

      <div className="categoryMenuWr">
        <MenuBodyWrapper
          handleShowMenu={this.handleShowMenu}
          handleClickOutside={this.handleClickOutside}
        />
        {/*<div className="menu_header" onClick={this.handleShowMenu}>*/}
        {/*<span>КАТАЛОГ ТОВАРОВ</span>*/}
        {/*<i className="fa fa-bars"></i>*/}
        {/*</div>*/}
        <ReactCSSTransitionGroup
          transitionName="rdAppear"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
          transitionAppearTimeout={250}
          transitionAppear
        >
          {this.state.isShowMenu &&
          <ul className="menu_body">

            <li className="menu_body-item">
              <a className="menu_body-item_a">
                <i className="fa fa-plane menu_body-item_ico"></i>
                <span className="menu_body-item_text">Птицы</span>
                <span className="menu_body-item_count">
                    <span className="wrap">
                      <span>5</span>
                    </span>
                  </span>
              </a>
              <ul className="menu_body-sub2">
                <li className="menu_body-sub2_item">
                  <a href="" className="menu_body-sub2_item_a">
                      <span className="menu_body-sub2_item_img">
                      <img src="/img-static/menu/b1.jpg"/>
                    </span>
                    <span className="menu_body-sub2_item_text">Дикий павлин</span>
                  </a>
                </li>

                <li className="menu_body-sub2_item">
                  <a href="" className="menu_body-sub2_item_a">
                      <span className="menu_body-sub2_item_img">
                      <img src="/img-static/menu/b3.jpg"/>
                    </span>
                    <span className="menu_body-sub2_item_text">Смешные подростки</span>

                  </a>
                </li>

                <li className="menu_body-sub2_item">
                  <a href="" className="menu_body-sub2_item_a">
                      <span className="menu_body-sub2_item_img">
                      <img src="/img-static/menu/b2.jpg"/>
                    </span>
                    <span className="menu_body-sub2_item_text">Заботливые Ара</span>

                  </a>
                </li>

                <a href="/" className="menu_body-sub2_item_link">Посмотреть все...</a>

              </ul>
            </li>

            <li className="menu_body-item">
              <a className="menu_body-item_a">
                <i className="fa fa-music menu_body-item_ico"></i>
                <span className="menu_body-item_text">Музыка</span>
                <span className="menu_body-item_count">
                    <span className="wrap">
                      <span>17</span>
                    </span>
                  </span>
              </a>
              <ul className="menu_body-sub2">

                <li className="menu_body-sub2_item">
                  <a href="" className="menu_body-sub2_item_a">
                      <span className="menu_body-sub2_item_img">
                      <img src="/img-static/menu/b3.jpg"/>
                    </span>
                    <span className="menu_body-sub2_item_text">Смешные подростки</span>

                  </a>
                </li>
                <li className="menu_body-sub2_item">
                  <a href="" className="menu_body-sub2_item_a">
                      <span className="menu_body-sub2_item_img">
                      <img src="/img-static/menu/b1.jpg"/>
                    </span>
                    <span className="menu_body-sub2_item_text">Дикий павлин</span>
                  </a>
                </li>

                <li className="menu_body-sub2_item">
                  <a href="" className="menu_body-sub2_item_a">
                      <span className="menu_body-sub2_item_img">
                      <img src="/img-static/menu/b2.jpg"/>
                    </span>
                    <span className="menu_body-sub2_item_text">Заботливые Ара</span>

                  </a>
                </li>

                <a href="/" className="menu_body-sub2_item_link">Посмотреть все...</a>


              </ul>
            </li>

            <li className="menu_body-item">
              <a className="menu_body-item_a">
                <i className="fa fa-fire menu_body-item_ico"></i>
                <span className="menu_body-item_text">Сафари</span>
                <span className="menu_body-item_count">
                    <span className="wrap">
                      <span>138</span>
                    </span>
                  </span>
              </a>
              <ul className="menu_body-sub2">

                <li className="menu_body-sub2_item">
                  <a href="" className="menu_body-sub2_item_a">
                      <span className="menu_body-sub2_item_img">
                      <img src="/img-static/menu/b2.jpg"/>
                    </span>
                    <span className="menu_body-sub2_item_text">Заботливые Ара</span>

                  </a>
                </li>

                <li className="menu_body-sub2_item">
                  <a href="" className="menu_body-sub2_item_a">
                      <span className="menu_body-sub2_item_img">
                      <img src="/img-static/menu/b1.jpg"/>
                    </span>
                    <span className="menu_body-sub2_item_text">Дикий павлин</span>
                  </a>
                </li>

                <li className="menu_body-sub2_item">
                  <a href="" className="menu_body-sub2_item_a">
                      <span className="menu_body-sub2_item_img">
                      <img src="/img-static/menu/b3.jpg"/>
                    </span>
                    <span className="menu_body-sub2_item_text">Смешные подростки</span>

                  </a>
                </li>

                <a href="/" className="menu_body-sub2_item_link">Посмотреть все...</a>


              </ul>
            </li>


          </ul>}
        </ReactCSSTransitionGroup>
      </div>
      // </div>
      // </div>
    )
  }
}

class MenuBody extends React.Component {
  handleClickOutside = () => {
    this.props.handleClickOutside();
  }

  render() {
    return (
      <div className="menu_header" onClick={this.props.handleShowMenu}>
        <span>КАТАЛОГ ТОВАРОВ</span>
        <i className="fa fa-bars"></i>
      </div>
    )
  }
}

const MenuBodyWrapper = onClickOutside(MenuBody);

export default CategoryMenu;
// onClickOutside