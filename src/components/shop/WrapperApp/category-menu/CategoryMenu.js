import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.less';
import {Link} from "react-router-dom";
import axios from "axios";
import onClickOutside from 'react-onclickoutside';
import urlApi from "../../../../api/urlApi";
import async from "../../helpers/middlewares/async";


class CategoryMenu extends React.Component {
  state = {
    isShowMenu: false,
    uniqCategory: [],
    // cacheTopItems: []


  }

  async componentDidMount() {
    try {
      let result = await axios.get(`${urlApi}/api/goods/tags`);
      if (result.data && Array.isArray(result.data)) {
        this.setState({uniqCategory: result.data})
      }
    } catch (er) {
      console.log(er);
    }
  }

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
    this.handleShowMenu(false);
    this.changeMainContainerOpacity('1')
  }

  getTopItemsFromCache = (item) => {// {count: 13, name: "школа"}
    // cacheTopItems = [{count: 33, name: "школа"}, {count: 13, name: "lll"}]
    console.log(1);
    let items = this.state.uniqCategory;
    let cachedItem = items.find((el) => {
      return el.name === item.name;
    })
    console.log(1.1, cachedItem);
    if (cachedItem && !cachedItem.sub2Items) {
      // {count: 13, name: "школа"}

      console.log(2);
      this.getTopItems(item);
    } else {
      // const newItems = Array.concat(this.state.cacheTopItems, item);
      // this.setState({cacheTopItems: newItems});

      return null;
    }
  }

  onMouseEnterItem = (el) => {
    //  {count: 13, name: "школа"}
    this.getTopItemsFromCache(el);

    // if (!goods) {
    //   this.getTopitems(el);
    // }
  }

  getTopItems = async (el) => {
    try {
      let result = await axios.get(`${urlApi}/api/goods/popular?category=${el.name}`);
      console.log(3);
      if (result.data && Array.isArray(result.data)) {
        // uniqCategory: [{count: 44, name: "школа"}, {count: 98, name: "школа"}]
        // cacheTopItems = [{count: 33, name: "школа", topItems: [...]}, {count: 13, name: "lll"}]
        let items = this.state.uniqCategory;
        console.log(4);
        items = items.map((item, ind) => {
          const newItem = {...item};
          if (el.name === item.name) {
            newItem.sub2Items = result.data;
          }
          return newItem;
          // return {...el,   sub2Items: result.data}
        });
        this.setState({
          uniqCategory: items,
          // cacheTopItems: Array.concat(this.state.cacheTopItems, {...el, topItems: result.data})});
        })
      }
    } catch (er) {
      console.log(er.response || er);
    }
  }

  render() {
    const {uniqCategory} = this.state;
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
            {
              this.state.uniqCategory.map((el, ind) =>
                <li className="menu_body-item" key={ind} onMouseEnter={() => this.onMouseEnterItem(el)}>
                  <Link
                    className="menu_body-item_a"
                    to={{
                      pathname: '/',
                      search: `?sort=${el.name}`,
                      hash: ''
                      // state: {fromDashboard: true}
                    }}
                  >
                    <i className="fa fa-plane menu_body-item_ico"></i>
                    <span className="menu_body-item_text">{el.name}</span>
                    <span className="menu_body-item_count">
                    <span className="wrap">
                      <span>{el.count}</span>
                    </span>
                  </span>
                  </Link>

                  <ul className="menu_body-sub2">

                    {el.sub2Items ?
                      el.sub2Items.map((item, ind) =>
                        <li className="menu_body-sub2_item" key={ind}>
                          <a href="" className="menu_body-sub2_item_a">
                            <span className="menu_body-sub2_item_img">
                              {/*<img src="/img-static/menu/b1.jpg"/>*/}
                              <img src={`/img-static/${item.photo[0]}`}/>
                            </span>
                            <span className="menu_body-sub2_item_text">{item.name}{' '}{item.model}</span>
                          </a>
                        </li>
                      ) :
                      <div className="sub2MenuSpinner"><i className="fa fa-spinner"></i></div>
                    }
                    <Link
                      className="menu_body-sub2_item_link"
                      to={{
                        pathname: '/',
                        search: `?sort=${el.name}`,
                        hash: ''
                        // state: {fromDashboard: true}
                      }}
                    >Посмотреть все...</Link>

                    {/*<a href="/" className="menu_body-sub2_item_link">Посмотреть все...</a>*/}

                  </ul>
                </li>
              )
            }
            {/*<li className="menu_body-item">*/}
            {/*<a className="menu_body-item_a">*/}
            {/*<i className="fa fa-plane menu_body-item_ico"></i>*/}
            {/*<span className="menu_body-item_text">Птицы</span>*/}
            {/*<span className="menu_body-item_count">*/}
            {/*<span className="wrap">*/}
            {/*<span>5</span>*/}
            {/*</span>*/}
            {/*</span>*/}
            {/*</a>*/}
            {/*<ul className="menu_body-sub2">*/}
            {/*<li className="menu_body-sub2_item">*/}
            {/*<a href="" className="menu_body-sub2_item_a">*/}
            {/*<span className="menu_body-sub2_item_img">*/}
            {/*<img src="/img-static/menu/b1.jpg"/>*/}
            {/*</span>*/}
            {/*<span className="menu_body-sub2_item_text">Дикий павлин</span>*/}
            {/*</a>*/}
            {/*</li>*/}

            {/*<li className="menu_body-sub2_item">*/}
            {/*<a href="" className="menu_body-sub2_item_a">*/}
            {/*<span className="menu_body-sub2_item_img">*/}
            {/*<img src="/img-static/menu/b3.jpg"/>*/}
            {/*</span>*/}
            {/*<span className="menu_body-sub2_item_text">Смешные подростки</span>*/}

            {/*</a>*/}
            {/*</li>*/}

            {/*<li className="menu_body-sub2_item">*/}
            {/*<a href="" className="menu_body-sub2_item_a">*/}
            {/*<span className="menu_body-sub2_item_img">*/}
            {/*<img src="/img-static/menu/b2.jpg"/>*/}
            {/*</span>*/}
            {/*<span className="menu_body-sub2_item_text">Заботливые Ара</span>*/}

            {/*</a>*/}
            {/*</li>*/}

            {/*<a href="/" className="menu_body-sub2_item_link">Посмотреть все...</a>*/}

            {/*</ul>*/}
            {/*</li>*/}
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