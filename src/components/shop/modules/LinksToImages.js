import React from "react";
import '../pages/pagesStyles/linkToImages.scss';

class LinksToImages extends React.Component {

  render() {
    return (
      <div className="linksToImages">
        <span className="linksToImages_text">
          Не нашли то, что искали - вышлите свое фото или найдите больше изображений тут&nbsp;
          <a href="https://unsplash.com/" target="_blank" className="linksToImages_text_link">unsplash</a>
          , <a href="https://ru.depositphotos.com/" target="_blank" className="linksToImages_text_link">depositphotos</a>
          &nbsp;или <a href="https://www.shutterstock.com/"  target="_blank" className="linksToImages_text_link">shutterstock</a>
        </span>
      </div>
    )
  }
}

export default LinksToImages;