import React from "react";
import st from './confirmBlock.less';
class ConfirmBlock extends React.Component {


    okHandler(){
        this.props.okHandler()
    }
    cancelHandler(){
        this.props.cancelHandler()
    }

    render() {
        return (
            <div className="confirmBlockForUser">
                <div className="confirmBlockForUser__content">
        <span className="confirmBlockForUser__content_btn_close">
        <i className="fa fa-times" aria-hidden="true"></i>
        </span>
                    {this.props.children}
                    <div className="confirmBlockForUser__content_btn">
                        <span onClick={this.okHandler.bind(this)} className="confirmBlockForUser__content_btn_ok">Ок</span>
                        <span onClick={this.cancelHandler.bind(this)} className="confirmBlockForUser__content_btn_cancel">Отмена</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmBlock;