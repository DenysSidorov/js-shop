import React from 'react';

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

export default MenuBody;
