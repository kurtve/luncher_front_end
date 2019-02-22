import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  getAllSchools,
  getDonorSchools,
  // getUserInfo,
  // deleteSchool,
  // addSchool
} from '../../actions';

import { 
  Wrap,
  SchoolForm,
  SchoolName,
  AddSchool
} from '../../styles/index';
import School from '../school/School';

class Home extends Component {
	state = {
		userToken: '',
		schoolname: '',
		donation: '',
		isEditing: false,
    isAdding: false,
	}

	componentDidMount() {
    let userToken = localStorage.getItem('jwt');
    this.setState({ userToken: userToken });

    if (userToken === null) {
      this.props.getDonorSchools();
    } else {
      this.props.getAllSchools(userToken);
    };
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({ [e.target.name] : e.target.value });
	};

	// handleAddSchool = e => {
	// 	e.preventDefault();
	// 	let userToken = localStorage.getItem('userToken');
	// 	let school = { schoolname: this.state.schoolname };
	// 	this.props.addSchool(userToken, school);
	// 	this.props.getAllSchools(userToken);
	// };

	render() {
		return (
			<Wrap>
				{this.state.userToken === null ? (
          this.props.donorViewSchools.map(school => (
            <School
              key={school.id}
              school={school}
            />
          ))
        ) : (
          <div>
            <SchoolForm
              name="addSchool"
              onSubmit={e => this.handleAddSchool(e)}>
              <SchoolName
                name="schoolname"
                value={this.state.schoolname}
                required
                onChange={e => this.handleChange(e)}/>
              <AddSchool>Add School</AddSchool>
            </SchoolForm>

            {this.props.schools.map(school => (
              <School
                key={school.id}
                school={school}
              />
            ))}
          </div>
        )}
			</Wrap>
		);
	}
}

const mapStateToProps = state => {
  return {
    schools: state.schools,
    token: state.userToken,
    donorViewSchools: state.donorViewSchools,
    getAllSchoolsIsLoading: state.getAllSchoolsIsLoading,
    // user: {
    //   id: state.id,
    //   firstName: state.firstName,
    //   lastName: state.lastName,
    //   username: state.username,
    //   type: state.type,
    //   email: state.email,
    // },
    // username: state.username,
    // schoolAdded: state.schoolAdded,
  };
};

export default connect(
  mapStateToProps,
  {
    getAllSchools,
    getDonorSchools,
    // getUserInfo,
    // deleteSchool,
    // addSchool,
  }
)(Home);