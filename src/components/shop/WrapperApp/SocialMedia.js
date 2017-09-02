import React from "react";
import st from './socialMedia.less';
class SocialMedia extends React.Component {
    render() {
        return (
            <div className="socialMedia__container">
                <div className="fab">
  <span className="fab-action-button">
        <i className="fab-action-button__icon"></i>
    </span>
                <ul className="fab-buttons">
                    <li className="fab-buttons__item">
                        <a href="#" className="fab-buttons__link" data-tooltip="Facebook">
                            <i className="icon-material icon-material_fb"></i>
                        </a>
                    </li>
                    <li className="fab-buttons__item">
                        <a href="#" className="fab-buttons__link" data-tooltip="Twitter">
                            <i className="icon-material icon-material_tw"></i>
                        </a>
                    </li>
                    <li className="fab-buttons__item">
                        <a href="#" className="fab-buttons__link" data-tooltip="Linkedin">
                            <i className="icon-material icon-material_li"></i>
                        </a>
                    </li>
                    <li className="fab-buttons__item">
                        <a href="#" className="fab-buttons__link" data-tooltip="Google+">
                            <i className="icon-material icon-material_gp"></i>
                        </a>
                    </li>
                </ul>
            </div></div>

        )

    }
}

export default SocialMedia;
console.log(1231423);
console.log(12314233);
console.log(1231233);
console.log(1231233);