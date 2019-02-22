import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/login_action';

import LogoImg from '../../images/logo.png';
import {
  RegWrap,
  FormWrapper,
  Input,
  Form,
  Logo,
  RegisterButton,
} from '../../styles';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    type: '',
    username: '',
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
			type: this.state.type,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
		};
		this.props.registerUser(user);
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
            <Input 
              type="text"
              name="username"
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

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);