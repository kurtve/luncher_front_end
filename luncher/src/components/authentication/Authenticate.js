import React, { Component } from 'react';
import Login from './Login';

const authenticateHOC = App =>
  class extends Component {
    state = {
      loggedIn: false
    };

    render() {
      return (
        <div>
          {this.state.loggedIn ? <App/> : <Login/>};
        </div>
      )
    }
  }

export default authenticateHOC;