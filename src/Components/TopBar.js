import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import './css/TopBar.css';

class TopBarComponent extends Component {
    render() {
        const LoginData = this.props.user ? ( this.displayUserData(this.props.user) ) : (
            <FlatButton onClick={this.props.showLogin} color="#FFF"><span style={{fontSize: '2em', color: '#FFF'}}>Sign in</span></FlatButton>
        )
        return (
            <div className="TopBar">
                <div className="Brand">
                    Organizur
                </div>
                <div className="TopBarLoginData">
                    {LoginData}
                </div>
            </div>
        );
    }
}

export default TopBarComponent;
