import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProfileWrap, PBoxSmall, PBoxLarge, P, P2, PRow } from '../../styles/index';

class Profile extends Component {
  componentDidMount() {
    // let userToken = localStorage.getItem('userToken');
		// let userID = localStorage.getItem('userID');
    // this.props.getUserInfo(userToken);
		// this.props.donationByUser(userID);
  }

  render() {
    return (
      <ProfileWrap>
        <PRow>
          <PBoxSmall>
            <P>First Name:</P>
          </PBoxSmall>
          <PBoxLarge>
            <P2>Andrew</P2>
          </PBoxLarge>
        </PRow>
        <PRow>
          <PBoxSmall>
            <P>Last Name:</P>
          </PBoxSmall>
          <PBoxLarge>
            <P2>Yurlov</P2>
          </PBoxLarge>
        </PRow>
        <PRow>
          <PBoxSmall>
            <P>Username:</P>
          </PBoxSmall>
          <PBoxLarge>
            <P2>120356aa</P2>
          </PBoxLarge>
        </PRow>
        <PRow>
          <PBoxSmall>
            <P>Email:</P>
          </PBoxSmall>
          <PBoxLarge>
            <P2>yurlovandrew@gmail.com</P2>
          </PBoxLarge>
        </PRow>
        <PRow>
          <PBoxSmall>
            <P>Account Type:</P>
          </PBoxSmall>
          <PBoxLarge>
            <P2>Admin</P2>
          </PBoxLarge>
        </PRow>
      </ProfileWrap>
    );
  }
}

export default Profile;