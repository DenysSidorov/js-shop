import React from 'react';

interface IPhone {
  phoneMobile: string;
  phoneText: string;
}

const Phone = (props: IPhone) => {
  const {phoneMobile, phoneText} = props;
  return (
    <a title='Позвонить на Лайф' href={phoneMobile} className='contactInfo__list-contacts-info_time'>
      <i className='fa fa-phone' />
      &nbsp;{phoneText}
    </a>
  );
};

export default Phone;
