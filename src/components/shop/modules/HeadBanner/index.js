import React from "react";
import './index.less';

class HeadBanner extends React.Component {

  render() {
    return (
      <div className="headBanner left fullWidth">
        <div className="container">
          <div className="headBanner_container">
            У нас акция "1 + 1 = 3". Третья картина - бесплатно!
            {/* <img src="https://static-eu.insales.ru/files/1/1621/1623637/original/a_l.png" alt=""/>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default HeadBanner;
