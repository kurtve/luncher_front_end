import React, { Component } from 'react';
import { connect } from 'react-redux';

import LogoImg from '../../images/logo.png';
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
} from '../../styles';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    userRole: '',
    userName: '',
    email: '',
    password: '',
  }
  
  render() {
    return (
      <Wrap>
        <FormWrapper>
          <Logo src={LogoImg} />
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
        </FormWrapper>
      </Wrap>
    );
  }
}

export default Register;