import React, {FC} from 'react';
import './index.less';

const HeadBanner: FC = () => {
  return (
    <div className='headBanner left fullWidth'>
      <div className='container'>
        <div className='headBanner_container'>{'У нас акция "1 + 1 = 3". Третья картина - бесплатно!'}</div>
      </div>
    </div>
  );
};

export default HeadBanner;
