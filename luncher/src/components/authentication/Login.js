import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Wrap,
  FormWrapper,
  Input,
  RadioDiv,
  InputRadio,
  RadioLable,
  Form,
  Logo,
  LoginButton,
  RegisterText,
  RegisterSpan,
} from '../../styles';
import LogoImg from '../../images/logo.png';

class Login extends Component {

  state = {
    loginForm: false,
  }

  render() {
    return (
      <Wrap>
        <FormWrapper>
          <Logo src={LogoImg} />
            {this.state.loginForm ? (
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
            ) : (
              <Form>
                <Input 
                  name="firstName"
                  placeholder="First Name"
                />
                <Input 
                  name="lastName"
                  placeholder="Last Name"
                />
                <RadioDiv>
                  <div>
                    <InputRadio 
                      type="radio"
                      id="User"
                      name="userRole"
                      value="user"
                      required
                    />
                    <RadioLable htmlFor="admin">Doner</RadioLable>
                  </div>
                  <div>
                    <InputRadio 
                      type="radio"
                      id="admin"
                      name="userRole"
                      value="admin"
                      required
                    />
                    <RadioLable htmlFor="admin">Admin</RadioLable>
                  </div>
                </RadioDiv>
                <Input 
                  type="text"
                  name="userName"
                  placeholder="Username"
                  required
                />
                <Input 
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <Input 
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <LoginButton>REGISTER</LoginButton> 
              </Form>
            )}
        </FormWrapper>
      </Wrap>
    );
  }
}

export default Login;