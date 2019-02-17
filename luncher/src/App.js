import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Wrap } from './styles';
import authenticateHOC from './components/authentication/Authenticate';
import Navigation from './components/navBar/Navigation';

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
      </Wrap>
    );
  }
}

export default authenticateHOC(App);
