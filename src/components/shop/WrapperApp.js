import React from "react";
import MainMenu from "./MainMenu";
import ConfirmBlock from "./ConfirmBlock";
import BtnUp from "./BtnUp";

class WrapperApp extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="content">
                        <MainMenu/>
                        {/*<ConfirmBlock/>*/}

                        <div className="mainContainerSection fullWidth left">
                            <div className="container">
                                <div className="preloader-main-content"></div>


                            </div>
                        </div>

                        <BtnUp/>
                    </div>
                </div>
            </div>

        )

    }
}

export default WrapperApp;