import React from "react";
import MainMenu from "./MainMenu";
import ConfirmBlock from "./ConfirmBlock";

class WrapperApp extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <MainMenu/>
                    <ConfirmBlock/>
                </div>
            </div>
        )

    }
}

export default WrapperApp;