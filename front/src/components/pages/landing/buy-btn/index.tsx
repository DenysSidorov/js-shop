import React, {FC, useCallback, useState} from 'react';
// import './index.less';
import OneClickModal from './modals/one-click-modal/OneClickModal';

interface IBuyBtn {
  text: string;
}

const BuyBtn: FC<IBuyBtn> = ({text}) => {
  const [isShowOneClickModal, setIsShowOneClickModal] = useState(false);

  const showHandler = useCallback(
    (value: boolean | undefined | React.MouseEvent): void => {
      console.log('value ====', value);
      if (value === undefined) {
        setIsShowOneClickModal(!isShowOneClickModal);
      } else if (typeof value === 'boolean') {
        setIsShowOneClickModal(value);
      }
    },
    [isShowOneClickModal]
  );
  console.log('RENDER Buy-BTN');
  return (
    <div className='buyNowContBodyTextContent2' onClick={() => showHandler(true)}>
      <div className='buyNow2_arrow'>
        <img src='/img-static/land/red-arrow.png' alt='' />
      </div>
      <span>{text || 'КУПИТЬ'}</span>

      {isShowOneClickModal && (
        <OneClickModal
          close={showHandler}
          goods={[]}
          willDeleteGoods={false}
          // showFileUpload={this.props.showFileUpload}
        />
      )}
    </div>
  );
};

export default BuyBtn;