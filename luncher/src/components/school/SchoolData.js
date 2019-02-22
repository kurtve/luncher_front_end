import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSchoolData } from '../../actions';

import { Wrap } from '../../styles/index';

class SchoolData extends Component {
  state = {
    isEditingSchool: false,
    isEditingDonation: false,
    isAddingDonation: false,
    schoolName: '',
    amount: '',
    donationID: '',
  };

  componentDidMount() {
    let userToken = localStorage.getItem('userToken');
  }

  render() {
    return(
      <Wrap>

      </Wrap>
    );
  }
}

const mapStateToProps = state => {
	return {
		// username: state.username,
		// userRole: state.userRole,
		schoolData: state.schoolData,
		// schoolDonations: state.schoolDonations,
		// schoolDonationsIsUpdating: state.schoolDonationsIsUpdating,
		// schoolDonationsIsDeleting: state.schoolDonationsIsDeleting,
		// schoolInfoIsUpdating: state.schoolInfoIsUpdating,
		// schoolEdit: state.schoolEdit,
		// isSchoolEditing: state.isSchoolEditing,
		// user: {
		// 	id: state.id,
		// 	firstName: state.firstName,
		// 	lastName: state.lastName,
		// 	username: state.username,
		// 	userRole: state.userRole,
		// 	email: state.email,
		// },
		// deleteError: state.deleteError,
		// editError: state.editError,
	};
};

export default connect(
	mapStateToProps,
	{
		getSchoolData,
		// deleteSchool,
		// schoolEdit,
		// getUserInfo,
		// addDonation,
		// deleteDonation,
		// editDonation,
		// getSchoolDonations,
	}
)(SchoolData);