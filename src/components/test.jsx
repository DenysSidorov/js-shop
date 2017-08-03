import st from './test.less';
import img from './photo.jpg';
import React from 'react';


// const component = (props) => <span> Hello world </span>
console.log("REACT GO");

class MyCo extends React.Component{
    render(){
        return (<div>Hi3 <img src={img} alt=""/></div>)
    }
}

export default MyCo;