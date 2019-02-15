import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

class Auth extends Component {
  state = {
    loginForm: false
  }

  render() {
    return (
      <div>
        {this.state.loginForm ? <Login/> : <Register />}
      </div>
    );
  }
}

export default Auth;