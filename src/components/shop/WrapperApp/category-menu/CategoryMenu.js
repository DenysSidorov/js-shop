import React from "react";
import './index.less';


class CategoryMenu extends React.Component {
  render() {
    return (
      <div className="categoryMenu fullWidth left">
        <div className="container">
          <div className="menu">
            <div className="menu_header">
              <span>КАТАЛОГ ТОВАРОВ</span>
              <i className="fa fa-bars"></i>
            </div>
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
              </li>


            </ul>
          </div>
        </div>
      </div>
    )

  }
}

export default CategoryMenu;