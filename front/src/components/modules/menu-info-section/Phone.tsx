import React from 'react';

const Phone = (props: {phoneMobile: string; phoneText: string}) => {
  // const [phoneForUser, setPhoneForUser] = useState(() => {
  //   return `${props.phoneText.slice(0, 5)} Показать номер`;
  // });
  //
  // const showAll = () => {
  //   setPhoneForUser(props.phoneText);
  // };

  const {phoneMobile, phoneText} = props;
  return (
    <a
      title='Позвонить на Лайф'
      href={phoneMobile}
      className='contactInfo__list-contacts-info_time'
      // onClick={this.showAll}
    >
      <i className='fa fa-phone' />
      &nbsp;{phoneText}
    </a>
  );
};

export default Phone;
