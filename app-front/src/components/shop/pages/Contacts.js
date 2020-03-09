import React, {Fragment} from "react";
import {setMetaTag, setTitle} from "../helpers/lib/utils";
import {connect} from "react-redux";

class Contacts extends React.Component {
        componentDidMount(prevProps) {
                window.scrollTo(0, 0)
          setTitle('Контакты');
          setMetaTag('description');
          setMetaTag('keywords', 'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины');

        }
    render() {
        return (
          <Fragment>
            <div style={{fontSize: '1.6rem', fontFamily: 'Roboto-Regular', marginTop: '10px'}}>
              Онлайн магазин. Украина, г. Одесса.
            </div>
            <div style={{fontSize: '1.6rem', fontFamily: 'Roboto-Regular'}}>
              Телефон: {this.props.serviceReducer.number1}
            </div>
            <div style={{fontSize: '1.6rem', fontFamily: 'Roboto-Regular'}}>
              Почтовый ящик: {this.props.serviceReducer.email1}
            </div>
          </Fragment>

        )

    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    serviceReducer: state.serviceReducer
  }
}

export default connect(
  mapStateToProps, null
)(Contacts);
