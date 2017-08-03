import React from "react";


class MainContent extends React.Component {
    render() {
        return (
            <div className="mainContainerSection fullWidth left">
                <div className="container">
                    <div className="preloader-main-content"></div>

                    {this.props.children}

                </div>
            </div>
        )

    }
}

export default MainContent;