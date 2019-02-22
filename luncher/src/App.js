import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
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
    // const redirectUsers = this.state.loginKey;

    // // redirectUsers.length > 0 ? <Redirect to="/" /> : (
    // if ( redirectUsers.length > 0 ) {
    //   return (<Redirect to="/" />)
    // }
    return (
      <Wrap>
        <Navigation />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" render={() => (

        )} /> */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/school/:id" render={props => <SchoolData {...props} />} />
      </Wrap>
    );
  }
}

export default App;
