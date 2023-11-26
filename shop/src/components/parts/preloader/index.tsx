import React from 'react';

interface IPreloader {
  height?: string | number;
  borderWidth?: string | number;
}
const Preloader = ({height, borderWidth}: IPreloader) => {
  const styles = {
    height: height ? height : '25px',
    width: height ? height : '25px',
    borderWidth: borderWidth ? borderWidth : '3px',
  };

  return (
    <div className='preloaderContainer'>
      <div className='loader' style={styles} />
    </div>
  );
};

export default Preloader;
