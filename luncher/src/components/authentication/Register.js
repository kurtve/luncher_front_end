import React, { Component } from 'react';
import { connect } from 'react-redux';

import LogoImg from '../../images/logo.png';
import {
  RegWrap,
  FormWrapper,
  Input,
  RadioDiv,
  InputRadio,
  RadioLable,
  Form,
  Logo,
  RegisterButton,
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

  handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
  };

  handleRegister = e => {
		e.preventDefault();
		let user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			type: this.state.userRole,
			username: this.state.userName,
			email: this.state.email,
			password: this.state.password,
		};
		// this.props.registerUser(user);
	};
  
  render() {
    return (
      <RegWrap>
        <FormWrapper>
          <Logo src={LogoImg} />
          <Form>
            <Input 
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={e => this.handleChange(e)}
            />
            <Input 
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={e => this.handleChange(e)}
            />
            <RadioDiv>
              <div>
                <InputRadio 
                  type="radio"
                  id="User"
                  name="userRole"
                  value="user"
                  checked="checked"
                  onChange={e => this.handleChange(e)}
                  required
                />
                <RadioLable htmlFor="doner">Doner</RadioLable>
              </div>
              <div>
                <InputRadio 
                  type="radio"
                  id="admin"
                  name="userRole"
                  value="admin"
                  onChange={e => this.handleChange(e)}
                  required
                />
                <RadioLable htmlFor="admin">Admin</RadioLable>
              </div>
            </RadioDiv>
            <Input 
              type="text"
              name="userName"
              placeholder="Username"
              value={this.state.userName}
              onChange={e => this.handleChange(e)}
              required
            />
            <Input 
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
            <Input 
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
              required
            />
            <RegisterButton onClick={e => this.handleRegister(e)}>REGISTER</RegisterButton> 
          </Form>
        </FormWrapper>
      </RegWrap>
    );
  }
}

export default Register;