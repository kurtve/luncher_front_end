import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Wrap } from './styles';
import authenticateHOC from './components/authentication/Authenticate';
import Navigation from './components/navBar/Navigation';
import Login from './components/authentication/Login';
import Profile from './components/profile/Profile';

class App extends Component {
  state = {
    loginKey: '',
    id: '',
    userName: ''
  }

  render() {
    return (
      <Wrap>
        <Navigation />
        <Route path="/login" component={Login} />
        <Route path="/profile/" component={Profile} />
        {/* <Route path="/school/:id" render={props => <SchootData {...props} />} /> */}
      </Wrap>
    );
  }
}

export default authenticateHOC(App);
