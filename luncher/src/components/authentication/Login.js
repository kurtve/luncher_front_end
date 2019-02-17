import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    userName: '',
    password: '',
  }

  handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
  };

  render() {
    return (
      <RegWrap>
        <FormWrapper>
          <Logo src={LogoImg} />
          <Form>
            <Input
              type="text"
              name="userName"
              placeholder="Username"
              value={this.state.userName}
              onChange={e => this.handleChange(e)}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
            <LoginButton>LOGIN</LoginButton>
            <RegisterText>Need an account? 
              <RegisterSpan onClick={() => this.props.register()}>Register</RegisterSpan>
            </RegisterText>
          </Form>
        </FormWrapper>
      </RegWrap>
    );
  }
}

export default Login;