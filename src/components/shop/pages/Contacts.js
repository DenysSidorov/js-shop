import React from "react";

class Contacts extends React.Component {
        componentDidMount(prevProps) {
                window.scrollTo(0, 0)
        }
    render() {
        return (
         <div style={{fontSize: '1.3rem'}}>Тут должна быть админка</div>
        )

    }
}

export default Contacts ;