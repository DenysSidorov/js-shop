import React from "react";

class Profile extends React.Component {
        componentDidMount(prevProps) {
                window.scrollTo(0, 0)
        }
    render() {
        return (
         <div style={{fontSize: '1.6rem', fontFamily: 'Roboto-Regular'}}>Тут должна быть админка</div>
        )

    }
}

export default Profile ;