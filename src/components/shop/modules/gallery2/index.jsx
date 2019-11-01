import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "./alice-carousel.css";
import './style.less';
// import "react-alice-carousel/lib/scss/alice-carousel.scss";

class Gallery2 extends React.Component {
  render() {
    const images = [
      {
        original: 'http://127.0.0.1:8090/img-static/libs/cars/1_1.jpg',
        thumbnail: 'http://127.0.0.1:8090/img-static/libs/cars/1_2.jpg',
      },
      {
        original: 'http://127.0.0.1:8090/img-static/libs/cars/2_1.jpg',
        thumbnail: 'http://127.0.0.1:8090/img-static/libs/cars/2_2.jpg',
      }
    ];
    const handleOnDragStart = e => e.preventDefault();
    return (
      <div style={{width: '500px'}}>
        <AliceCarousel
          mouseDragEnabled
          buttonsDisabled={true}
          showSlideInfo={true}
        >
          <img src="http://127.0.0.1:8090/img-static/libs/cars/1_1.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
          <img src="http://127.0.0.1:8090/img-static/libs/cars/1_2.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
        </AliceCarousel>
      </div>
    )
  }
}

export default Gallery2;
