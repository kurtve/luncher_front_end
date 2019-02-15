import React, { Component } from 'react';
import { connect } from 'react-redux';

import LogoImg from '../../images/logo.png';
import {
  Wrap,
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

  render() {
    return (
      <Wrap>
        <FormWrapper>
          <Logo src={LogoImg} />
          <Form>
            <Input
              type="text"
              name="userName"
              placeholder="Username"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
            />
            <LoginButton>LOGIN</LoginButton>
            <RegisterText>Need an account? <RegisterSpan>Register</RegisterSpan></RegisterText>
          </Form>

        </FormWrapper>
      </Wrap>
    );
  }
}

export default Login;