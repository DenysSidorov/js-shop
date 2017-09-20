import React from "react";
import queryParams from '../helpers/lib/queryParams';
import styles from './index.scss';
class Panel extends React.Component {
    componentDidMount = (prevProps) => {
        window.scrollTo(0, 0)

        // var token = queryParams['t'];
        // if (token) {
        //     console.log(token, 'tokenischeeeeeee');
        // }

    };

    render = ()=> {
        return (
           <div className="adminPanContainer fullWidth left">

               <div className="adminPanHeader">
                   <div className="adminPanHeader__left">
                       <span className="adminPanHeader__title">Админ Панель</span>
                       <span className="adminPanHeader__btn">На сайт</span>
                   </div>
                   <div className="adminPanHeader__right">
                       <span className="adminPanHeader__btn">Выйти</span>
                   </div>
               </div>
               <div className="adminPan__mainContent">
                       <div className="adminPan__mainContent_menu left">
                           <div className="adminPan__menu_item">
                               <i className="fa fa-credit-card"></i>
                               <span className="adminPan__menu_item_text">Заказы</span>
                               <span className="adminPan__menu_item_count"><span>4</span></span>
                           </div>
                       </div>
                       <div className="adminPan__mainContent_content left">

                           <div className="adminPan__mainContent_content_filters">
                               <div className="adminPan__filters_item">
                                   <div className="adminPan__filters_item_log">
                                       <i className="fa fa-shopping-cart"></i>
                                   </div>
                                   <div className="adminPan__filters_item_text">
                                       <div className="adminPan__filters_item_text_count">12</div>
                                       <div className="adminPan__filters_item_text_desk">Новых покупок</div>
                                   </div>
                               </div>
                           </div>
                           <thead>
                           <tr>
                               <th>Фото</th>
                               <th>Наимен.</th>
                               <th>Кол-во</th>
                               <th>Цена</th>
                               <th>Уд.</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                           <tr><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
                           <tr><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>
                           <tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>
                           </tbody>


                       </div>
               </div>
           </div>
        )

    }
}

export default Panel;