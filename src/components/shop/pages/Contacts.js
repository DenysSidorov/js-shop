import React from "react";

class Contacts extends React.Component {
        componentDidMount(prevProps) {
                window.scrollTo(0, 0)
        }
    render() {
        return (
         <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Regular'}}>
            Онлайн магазин. Украина, г. Одесса. Телефон: 0936877613
         </div>
        )

    }
}

export default Contacts ;