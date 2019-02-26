import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Nav, AppLogo, Menu, ProfileLink, LogoutButton } from '../../styles/appStyles';
import Logo from '../../images/logo.png';

class Navigation extends Component {
  state = { userToken: '' }

  componentDidMount() {
    let userToken = localStorage.getItem('jwt');
    this.setState({ userToken: userToken });
  }

  logoutUser = () => {
		localStorage.removeItem('jwt');
		window.location.reload();
  }

  render() {
    return(
      <Nav>
        <Link to='/'><AppLogo src={Logo} /></Link>
          {!this.state.userToken ? (
            <Menu>
              <NavLink to='/register' style={{ textDecoration: 'none'}}>
                <ProfileLink>Register</ProfileLink>
              </NavLink>
              <NavLink to='/login'>
                <LogoutButton>Login</LogoutButton>
              </NavLink>
            </Menu>
          ) : (
            <Menu>
              <NavLink to='/' onClick={this.logoutUser}>
                <LogoutButton>Logout</LogoutButton>
              </NavLink>
            </Menu>
          )}
      </Nav>
    );
  }
}

export default Navigation;