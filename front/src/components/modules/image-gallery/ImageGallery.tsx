import React from 'react';
import ImageGallery from 'react-image-gallery';
import './style.less';

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

class UseGalleryImage extends React.Component<IUseGalleryImage> {
  state = {
    isFullScreen: this.props.isFullScreen || false
  };

  UNSAFE_componentWillMount() {
    if (this.state.isFullScreen) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'auto';
    }
  }

  componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    window.addEventListener('keydown', function (e: any) {
      // Выходим из полноэкранного режима
      if (e.keyCode === 27) {
        self.fullScreenClose(e);
      }
    });
  }

  fullScreenM() {
    this.setState({
      isFullScreen: true
    });
    window.document.body.style.overflow = 'hidden';
  }

  fSClose(event: any) {
    if (event.target.getAttribute('class') === 'fullScreen') {
      event.stopPropagation();
      this.setState({
        isFullScreen: false
      });
      window.document.body.style.overflow = 'auto';
    }
  }

  fullScreenClose(event: any) {
    event.stopPropagation();
    this.setState({
      isFullScreen: false
    });
    window.document.body.style.overflow = 'auto';
  }

  render() {
    let arrForView = [defaltImg, defaltImg, defaltImg];
    const {items, height, width, randomNumber} = this.props;
    if (items && items.length) {
      arrForView = this.props.items;
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
          <div className='flScreenBtn' onClick={this.fullScreenM.bind(this)}>
            <i
              className='fa fa-television'
              aria-hidden='true'
              style={{fontSize: '35px', width: '100%', opacity: '0'}}
            />
          </div>
          {this.state.isFullScreen ? (
            <div className='fullScreen' onClick={this.fSClose.bind(this)}>
              <i onClick={this.fullScreenClose.bind(this)} className='fa fa-times fullCrossBtn' aria-hidden='true' />
              <div className='fullScreenCenter'>
                <div className='fullScreenCenterContainer'>
                  <div className='fullScreenCenterContainerHZ' onClick={this.fullScreenClose.bind(this)}>
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
                    {...this.props}
                    items={arrForView}
                  />
                </div>
              </div>
            </div>
          ) : null}
          {this.state.isFullScreen ? null : (
            <ImageGallery
              randomNumber={Date.now().toString()}
              slideInterval={2000}
              slideDuration={300}
              lazyLoad
              showPlayButton={false}
              showNav
              {...this.props}
              items={arrForView}
              showFullscreenButton={false}
            />
          )}
        </div>
      </div>
    );
  }
}

export default UseGalleryImage;
