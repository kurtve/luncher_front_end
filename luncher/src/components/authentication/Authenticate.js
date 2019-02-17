import React, { Component } from 'react';
import Login from './Login';
import Auth from './Auth';

const authenticateHOC = App =>
  class extends Component {
    state = {
      loggedIn: true
    };

    render() {
      return (
        <div>
          {this.state.loggedIn ? <App/> : <Auth/>};
        </div>
      )
    }
  }

export default authenticateHOC;