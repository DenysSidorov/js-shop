import React from "react";
import MainMenu from "./MainMenu";
import ConfirmBlock from "./ConfirmBlock";
import BtnUp from "./BtnUp";
import FooterSection from "./FooterSection";
import MainContent from "./MainContent";

class WrapperApp extends React.Component {
    render() {
        return (
                <div className="wrapper">
                    <div className="content">
                        {/*<ConfirmBlock/>*/}

                        <MainMenu {...this.props}/>
                        <MainContent {...this.props}>

                        </MainContent>


                    </div>
                        <FooterSection/>
                        <BtnUp/>
                </div>
        )
    }
}

export default WrapperApp;