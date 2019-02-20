import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Wrap } from './styles';
import Navigation from './components/navBar/Navigation';
import Home from './components/home/Home';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import SchoolData from './components/school/SchoolData';

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
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/school/:id" render={props => <SchoolData {...props} />} />
      </Wrap>
    );
  }
}

export default App;
