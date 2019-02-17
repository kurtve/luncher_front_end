import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Nav, AppLogo, Menu, ProfileLink, LogoutButton } from '../../styles/appStyles';
import './Navigation.css';
import Logo from '../../images/logo.png';

const Navigation = props => {
  const logoutUser = () => {
		localStorage.removeItem('userToken');
		localStorage.removeItem('id');
		window.location.reload();
  };
  
  return(
    <Nav>
      <Link to='/'>
        <AppLogo src={Logo} />
      </Link>
      <Menu>
        <NavLink className="profile" to='/profile/'>
          <ProfileLink>Ssnow{/* {localStorage.getItem('userName')} */}</ProfileLink>
        </NavLink>
        <NavLink to='/' onClick={() => logoutUser()}>
          <LogoutButton>Logout</LogoutButton>
        </NavLink>
      </Menu>
    </Nav>
  );
};

export default Navigation;