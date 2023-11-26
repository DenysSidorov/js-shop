import React, {FC} from 'react';

interface IMenuBody {
  handleClickOutside?: Function;
  handleShowMenu: Function;
}

const MenuBody: FC<IMenuBody> = ({handleShowMenu}) => {
  return (
    <div className='menu_header' onClick={() => handleShowMenu()}>
      <span>КАТАЛОГ КАРТИН</span>
      <i className='fa fa-bars' />
    </div>
  );
};

export default MenuBody;
