import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

class Auth extends Component {
  state = {
    loginForm: true
  }

  registerForm = () => {
		this.setState({loginForm: false});
	};

  render() {
    return (
      <div>
        {this.state.loginForm ? <Login register={this.registerForm}/> : <Register login={this.state.loginForm}/>}
      </div>
    );
  }
}

export default Auth;