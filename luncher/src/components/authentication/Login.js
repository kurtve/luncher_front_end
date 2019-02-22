import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/login_action';

import LogoImg from '../../images/logo.png';
import {
  RegWrap,
  FormWrapper,
  Input,
  Form,
  Logo,
  LoginButton,
  RegisterText,
  RegisterSpan,
} from '../../styles';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = e => {
    e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
  };

  handleSubmitLogin = (e) => {
    e.preventDefault();
    let cred = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.loginUser(cred);
    localStorage.setItem('username', this.state.username);
    // window.location.reload('/schools');
  };

  render() {
    return (
      <RegWrap>
        <FormWrapper>
          <Logo src={LogoImg} />
          <Form>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
            <LoginButton onClick={(e) => this.handleSubmitLogin(e)}>LOGIN</LoginButton>
            <RegisterText>Need an account? 
              <RegisterSpan onClick={() => this.props.register()}>Register</RegisterSpan>
            </RegisterText>
          </Form>
        </FormWrapper>
      </RegWrap>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginIsLoading: state.loginIsLoading,
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);