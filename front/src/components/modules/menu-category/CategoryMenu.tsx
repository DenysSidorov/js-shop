import React, {FC, useEffect, useState} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.less';
import {Link} from 'react-router-dom';
import axios from 'axios';
import onClickOutside from 'react-onclickoutside';
import urlApi from '../../../api/urlApi';

interface ICategoryMenu {
  isShowMenu: boolean;
  uniqCategory: Array<any>;
}

class CategoryMenu: FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [uniqCategory, setUniqCategory] = useState([]);

  useEffect(()=>{
    try {
      const result = await axios.get(`${urlApi}/api/goods/tags`);
      if (result.data && Array.isArray(result.data)) {
        setUniqCategory(result.data);
      }
    } catch (er) {
      console.log(er);
    }
  }, []);

  handleShowMenu = (bool: any) => {
    if (bool === undefined) {
      const {isShowMenu} = this.state;
      this.setState({isShowMenu: !isShowMenu}, () => {
        // eslint-disable-next-line no-shadow
        const {isShowMenu} = this.state;
        this.changeMainContainerOpacity(isShowMenu ? '0.5' : '1');
      });
    } else {
      this.setState({isShowMenu: bool});
      this.changeMainContainerOpacity(bool ? '0.5' : '1');
    }
  };

  changeMainContainerOpacity = (value: any) => {
    const mainConts: any = document.getElementsByClassName('mainContainerSection');
    if (mainConts && mainConts.length) {
      const mainCont = mainConts[0];
      mainCont.style.opacity = value;
    }
  };

  handleClickOutside = () => {
    this.handleShowMenu(false);
    this.changeMainContainerOpacity('1');
  };

  // eslint-disable-next-line consistent-return
  getTopItemsFromCache = (item: any): any | null => {
    // {count: 13, name: "школа"}
    // cacheTopItems = [{count: 33, name: "школа"}, {count: 13, name: "lll"}]
    console.log(1);
    const {uniqCategory} = this.state;
    const items = uniqCategory;
    const cachedItem: any = items.find((el: any) => {
      return el.name === item.name;
    });
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
  };

  onMouseEnterItem = (el: any) => {
    //  {count: 13, name: "школа"}
    this.getTopItemsFromCache(el);

    // if (!goods) {
    //   this.getTopitems(el);
    // }
  };

  getTopItems = async (el: any) => {
    const {uniqCategory} = this.state;
    try {
      const result = await axios.get(`${urlApi}/api/goods/popular?category=${el.name}&items=10`);
      console.log(3);
      if (result.data && Array.isArray(result.data)) {
        // uniqCategory: [{count: 44, name: "школа"}, {count: 98, name: "школа"}]
        // cacheTopItems = [{count: 33, name: "школа", topItems: [...]}, {count: 13, name: "lll"}]
        let items: any[] = [].concat(uniqCategory);
        console.log(4);
        items = items.map((item: any): any => {
          const newItem = {...item};
          if (el.name === item.name) {
            newItem.sub2Items = result.data;
          }
          return newItem;
          // return {...el,   sub2Items: result.data}
        });
        this.setState({
          uniqCategory: items
          // cacheTopItems: Array.concat(this.state.cacheTopItems, {...el, topItems: result.data})});
        });
      }
    } catch (er) {
      console.log(er.response || er);
    }
  };

    const {uniqCategory, isShowMenu} = this.state;
    return (
      // <div className="categoryMenu fullWidth left">
      // <div className="container">

      <div className='categoryMenuWr'>
        <MenuBodyWrapper handleShowMenu={this.handleShowMenu} handleClickOutside={this.handleClickOutside} />
        {/* <div className="menu_header" onClick={this.handleShowMenu}> */}
        {/* <span>КАТАЛОГ ТОВАРОВ</span> */}
        {/* <i className="fa fa-bars"></i> */}
        {/* </div> */}
        <ReactCSSTransitionGroup
          transitionName='rdAppear'
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
          transitionAppearTimeout={250}
          transitionAppear
        >
          {isShowMenu && (
            <ul className='menu_body'>
              {uniqCategory.map((el: any, ind) => (
                // eslint-disable-next-line react/no-array-index-key
                <li className='menu_body-item' key={ind + 1} onMouseEnter={() => this.onMouseEnterItem(el)}>
                  <Link
                    className='menu_body-item_a'
                    to={{
                      pathname: '/shop',
                      search: `?sort=${el.name}`,
                      hash: ''
                      // state: {fromDashboard: true}
                    }}
                  >
                    <i className='fa fa-picture-o menu_body-item_ico' />
                    <span className='menu_body-item_text'>{el.name}</span>
                    <span className='menu_body-item_count'>
                      <span className='wrap'>
                        <span>{el.count}</span>
                      </span>
                    </span>
                  </Link>

                  <ul className='menu_body-sub2'>
                    {el.sub2Items ? (
                      el.sub2Items.map((item: any, index: number) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <li className='menu_body-sub2_item' key={index}>
                          {/* eslint-disable-next-line no-underscore-dangle */}
                          <Link to={`/card/${item._id}`} className='menu_body-sub2_item_a'>
                            <span className='menu_body-sub2_item_img'>
                              {/* <img src="/img-static/menu/b1.jpg"/> */}
                              <img src={`/img-static/${item.photo[0]}`} />
                            </span>
                            <span className='menu_body-sub2_item_text'>
                              {item.name} {item.model}
                            </span>
                          </Link>
                        </li>
                      ))
                    ) : (
                      <div className='sub2MenuSpinner'>
                        <i className='fa fa-spinner' />
                      </div>
                    )}
                    <Link
                      className='menu_body-sub2_item_link'
                      to={{
                        pathname: '/shop',
                        search: `?sort=${el.name}`,
                        hash: ''
                        // state: {fromDashboard: true}
                      }}
                    >
                      Посмотреть все...
                    </Link>

                    {/* <a href="/" className="menu_body-sub2_item_link">Посмотреть все...</a> */}
                  </ul>
                </li>
              ))}
              {/* <li className="menu_body-item"> */}
              {/* <a className="menu_body-item_a"> */}
              {/* <i className="fa fa-plane menu_body-item_ico"></i> */}
              {/* <span className="menu_body-item_text">Птицы</span> */}
              {/* <span className="menu_body-item_count"> */}
              {/* <span className="wrap"> */}
              {/* <span>5</span> */}
              {/* </span> */}
              {/* </span> */}
              {/* </a> */}
              {/* <ul className="menu_body-sub2"> */}
              {/* <li className="menu_body-sub2_item"> */}
              {/* <a href="" className="menu_body-sub2_item_a"> */}
              {/* <span className="menu_body-sub2_item_img"> */}
              {/* <img src="/img-static/menu/b1.jpg"/> */}
              {/* </span> */}
              {/* <span className="menu_body-sub2_item_text">Дикий павлин</span> */}
              {/* </a> */}
              {/* </li> */}

              {/* <li className="menu_body-sub2_item"> */}
              {/* <a href="" className="menu_body-sub2_item_a"> */}
              {/* <span className="menu_body-sub2_item_img"> */}
              {/* <img src="/img-static/menu/b3.jpg"/> */}
              {/* </span> */}
              {/* <span className="menu_body-sub2_item_text">Смешные подростки</span> */}

              {/* </a> */}
              {/* </li> */}

              {/* <li className="menu_body-sub2_item"> */}
              {/* <a href="" className="menu_body-sub2_item_a"> */}
              {/* <span className="menu_body-sub2_item_img"> */}
              {/* <img src="/img-static/menu/b2.jpg"/> */}
              {/* </span> */}
              {/* <span className="menu_body-sub2_item_text">Заботливые Ара</span> */}

              {/* </a> */}
              {/* </li> */}

              {/* <a href="/" className="menu_body-sub2_item_link">Посмотреть все...</a> */}

              {/* </ul> */}
              {/* </li> */}
            </ul>
          )}
        </ReactCSSTransitionGroup>
      </div>
      // </div>
      // </div>
    );
}

class MenuBody extends React.Component<any, any> {
  handleClickOutside = () => {
    const {handleClickOutside} = this.props;
    handleClickOutside();
  };

  render() {
    const {handleShowMenu} = this.props;
    return (
      <div className='menu_header' onClick={handleShowMenu}>
        <span>КАТАЛОГ КАРТИН</span>
        <i className='fa fa-bars' />
      </div>
    );
  }
}

const MenuBodyWrapper = onClickOutside(MenuBody);

export default CategoryMenu;
// onClickOutside
