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
                        <MainMenu/>
                        <MainContent>
                           <h1>test 23423423 4234234 234 234 234 23432</h1>
                        </MainContent>
                    </div>

                        <FooterSection/>
                        <BtnUp/>

                </div>


        )

    }
}

export default WrapperApp;