import React, {FC, useCallback, useEffect, useState} from 'react';
import ImageGallery from 'react-image-gallery';
import './index.less';

import defaultImg from './noCar.jpg';

const defaltImg = {
  original: defaultImg,
  thumbnail: defaultImg
};

interface IUseGalleryImage {
  isFullScreen?: boolean;
  slideOnThumbnailHover: boolean;
  items: any;
  height?: string;
  width?: string;
  randomNumber?: number;
  autoPlay?: boolean;
}

const UseGalleryImage: FC<IUseGalleryImage> = (props) => {
  const [isFullScreen, setIsFullScreen] = useState(props.isFullScreen || false);

  useEffect(() => {
    if (isFullScreen) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'auto';
    }
  }, [isFullScreen]);

  useEffect(() => {
    window.addEventListener('keydown', function (e: any) {
      if (e.keyCode === 27) {
        fullScreenClose();
      }
    });
  }, []);

  const fullScreenM = useCallback(() => {
    setIsFullScreen(true);
    window.document.body.style.overflow = 'hidden';
  }, []);

  const fSClose = useCallback((event: any) => {
    if (event.target.getAttribute('class') === 'fullScreen') {
      event.stopPropagation();
      setIsFullScreen(false);
      window.document.body.style.overflow = 'auto';
    }
  }, []);

  const fullScreenClose = useCallback(() => {
    setIsFullScreen(false);
    window.document.body.style.overflow = 'auto';
  }, []);

  let arrForView = [defaltImg, defaltImg, defaltImg];
  const {items, height, width, randomNumber} = props;
  if (items && items.length) {
    arrForView = props.items;
  }
  const t: any = Date.now();
  const d = (t.toString() * 1 + 4).toString();
  return (
    <div
      style={{
        height: height || '100%',
        width: width || '100%',
        position: 'relative'
      }}
    >
      <span className='nullBlock'>{randomNumber || null}</span>
      <div className='imageGalleryContainer'>
        <div className='flScreenBtn' onClick={fullScreenM}>
          <i className='fa fa-television' aria-hidden='true' style={{fontSize: '35px', width: '100%', opacity: '0'}} />
        </div>
        {isFullScreen ? (
          <div className='fullScreen' onClick={fSClose}>
            <i onClick={fullScreenClose} className='fa fa-times fullCrossBtn' aria-hidden='true' />
            <div className='fullScreenCenter'>
              <div className='fullScreenCenterContainer'>
                <div className='fullScreenCenterContainerHZ' onClick={fullScreenClose}>
                  <i className='fa fa-times flScreenBtnInternal' aria-hidden='true' />
                </div>
                <ImageGallery
                  showThumbnails={arrForView.length > 1}
                  slideInterval={3500}
                  slideDuration={300}
                  randomNumber={d}
                  lazyLoad
                  showPlayButton={false}
                  showNav
                  showFullscreenButton={false}
                  {...props}
                  items={arrForView}
                />
              </div>
            </div>
          </div>
        ) : null}
        {isFullScreen ? null : (
          <ImageGallery
            randomNumber={Date.now().toString()}
            slideInterval={2000}
            slideDuration={300}
            lazyLoad
            showPlayButton={false}
            showNav
            {...props}
            items={arrForView}
            showFullscreenButton={false}
          />
        )}
      </div>
    </div>
  );
};

export default UseGalleryImage;
