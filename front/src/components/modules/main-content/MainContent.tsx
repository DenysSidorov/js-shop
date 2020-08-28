import React, {FC} from 'react';

const MainContent: FC = ({children}) => {
  return (
    <div className='mainContainerSection fullWidth left'>
      <div className='container'>
        <div className='preloader-main-content' />
        {children}
      </div>
    </div>
  );
};

export default MainContent;
