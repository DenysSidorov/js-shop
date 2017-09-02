import React from "react";

class Contacts extends React.Component {
        componentDidMount(prevProps) {
                window.scrollTo(0, 0)
        }
    render() {
        return (
         <div style={{fontSize: '1.6rem', fontFamily: 'Roboto-Regular'}}>
             Украина, г. Одесса
         </div>
        )

    }
}

export default Contacts ;