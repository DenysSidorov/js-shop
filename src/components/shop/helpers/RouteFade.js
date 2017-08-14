import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';

const RouteFade = ({component: Component, transition, ...rest})=>(
    <Route {...rest} render={(matchProps)=>(
        <FadeIn transition={transition}>
            <Component {...matchProps}/>
        </FadeIn>
    )}/>
)


class FadeIn extends React.Component{
    componentDidMount() {
        //console.log('componentDidMount', this.displayName);
        var that = this;
        var elem = ReactDOM.findDOMNode(that);
        elem.style.opacity = 0;
        window.requestAnimationFrame(function(){
            // set a transition on the opacity
            elem.style.transition = that.props.transition || 'opacity 1500s';
            // and set opacity to 1
            elem.style.opacity = 1;
        })
    }
    render(){
        return (
            <div> {this.props.children}</div>
        )
    }
}

export  default RouteFade;