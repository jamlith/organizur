import React, { Component } from 'react';
import TopBarComponent from './Components/TopBar.js';
import LeftNavComponent from './Components/LeftNav.js';
import ContentComponent from './Components/Content.js';
import './App.css';

class App extends Component {
  // content_route possible values: { login_form }
  state = {
    user: null,
    content_route: null,
  }
  reqShowLogin = () => {
    if (!this.state.user) {
      this.setState({
        content_route: 'login_form',
      })
    }
  }
  render() {
    return (
      <div className="App">
        <TopBarComponent user={this.state.user} showLogin={this.reqShowLogin}/>
        <div className='ContentRow'>
          <LeftNavComponent/>
          <ContentComponent/>
        </div>
      </div>
    );
  }
}

export default App;
