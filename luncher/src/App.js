import React, { Component } from 'react';
import { Wrap } from './styles';
import authenticateHOC from './components/authentication/Authenticate';

class App extends Component {
  render() {
    return (
      <Wrap>

      </Wrap>
    );
  }
}

export default authenticateHOC(App);
