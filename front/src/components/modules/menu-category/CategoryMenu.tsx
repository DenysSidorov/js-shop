import React, {FC, useCallback, useEffect, useState} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.less';
import {Link} from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import MenuBody from './menu-body/MenuBody';
import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';
import {getPopularGoodsAPI, getUniqCategoriesInGoodsAPI} from '../../../api/endpoints';

interface ICategoryMenu extends ICartReducerItem {
  sub2Items?: any;
}

const CategoryMenu: FC = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [uniqCategory, setUniqCategory] = useState<any>([]);

  useEffect(() => {
    async function getCategory() {
      // const result = await axios.get(`${urlApi}/api/goods/tags`);
      const result = await getUniqCategoriesInGoodsAPI();
      try {
        if (result.data && Array.isArray(result.data)) {
          setUniqCategory(result.data);
        }
      } catch (er) {
        console.log(er);
      }
    }

    getCategory();
  }, []);

  const changeMainContainerOpacity = useCallback((value: any) => {
    const mainConts: HTMLCollection | any = document.getElementsByClassName('mainContainerSection');
    if (mainConts && mainConts.length) {
      const mainCont = mainConts[0];
      mainCont.style.opacity = value;
    }
  }, []);

  const handleShowMenu = useCallback(
    (bool: boolean | undefined) => {
      if (bool === undefined) {
        setIsShowMenu((prev) => !prev);
        changeMainContainerOpacity(isShowMenu ? '0.5' : '1');
      } else {
        setIsShowMenu(bool);
        changeMainContainerOpacity(bool ? '0.5' : '1');
      }
    },
    [isShowMenu, changeMainContainerOpacity]
  );

  const getTopItems = useCallback(
    (oneItem: ICategoryMenu) => {
      async function getData(el: ICategoryMenu) {
        try {
          const result = await getPopularGoodsAPI(el.name, 10);

          if (result.data && Array.isArray(result.data)) {
            let items: ICategoryMenu[] = [].concat(uniqCategory);

            items = items.map(
              (item: ICategoryMenu): ICategoryMenu => {
                const newItem = {...item};
                if (el.name === item.name) {
                  newItem.sub2Items = result.data;
                }
                return newItem;
              }
            );
            setUniqCategory(items);
          }
        } catch (er) {
          console.log(er.response || er);
        }
      }
      getData(oneItem);
    },
    [uniqCategory]
  );

  const handleClickOutside = () => {
    handleShowMenu(false);
    changeMainContainerOpacity('1');
  };

  const getTopItemsFromCache = useCallback(
    (item: ICategoryMenu): ICategoryMenu | null => {
      const items = uniqCategory;
      const cachedItem: ICategoryMenu = items.find((el: any) => {
        return el.name === item.name;
      });
      if (cachedItem && !cachedItem.sub2Items) {
        getTopItems(item);
      } else {
        return null;
      }
      return null;
    },
    [uniqCategory, getTopItems]
  );

  const onMouseEnterItem = useCallback(
    (el: ICategoryMenu) => {
      getTopItemsFromCache(el);
    },
    [getTopItemsFromCache]
  );

  return (
    <div className='categoryMenuWr'>
      <MenuBodyWrapper handleShowMenu={handleShowMenu} handleClickOutside={handleClickOutside} />
      <ReactCSSTransitionGroup
        transitionName='rdAppear'
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}
        transitionAppearTimeout={250}
        transitionAppear
      >
        {isShowMenu && (
          <ul className='menu_body'>
            {uniqCategory.map((el: any, ind: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <li className='menu_body-item' key={ind + 1} onMouseEnter={() => onMouseEnterItem(el)}>
                <Link
                  className='menu_body-item_a'
                  to={{
                    pathname: '/shop',
                    search: `?sort=${el.name}`,
                    hash: ''
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
                    el.sub2Items.map((item: ICategoryMenu, index: number) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <li className='menu_body-sub2_item' key={index}>
                        <Link to={`/card/${item._id}`} className='menu_body-sub2_item_a'>
                          <span className='menu_body-sub2_item_img'>
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
                    }}
                  >
                    Посмотреть все...
                  </Link>
                </ul>
              </li>
            ))}
          </ul>
        )}
      </ReactCSSTransitionGroup>
    </div>
  );
};

const MenuBodyWrapper = onClickOutside(MenuBody);

export default CategoryMenu;
