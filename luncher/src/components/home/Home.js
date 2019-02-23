import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAllSchools,
  getDonorSchools,
  addSchool
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
    schoolName: '',
    schoolAddress: '',
		fundsRequested: '',
		isEditing: false,
    isAdding: false,
	}

	componentDidMount() {
    let userToken = localStorage.getItem('jwt');
    this.setState({ userToken: userToken });

    if (!userToken) { this.props.getDonorSchools()} 
    else { this.props.getAllSchools(userToken)};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({ [e.target.name] : e.target.value });
	};

	handleAddSchool = e => {
		e.preventDefault();
		let userToken = localStorage.getItem('jwt');
		let school = {
      schoolName: this.state.schoolName,
      fundsRequested: this.state.fundsRequested,
      schoolAddress: this.state.schoolAddress
    };

		this.props.addSchool(userToken, school);
		this.props.getAllSchools(userToken);
	};

	render() {
		return (
			<Wrap>
				{!this.state.userToken ? (
          this.props.donorViewSchools ? (
            this.props.donorViewSchools.map(school => (
              <School key={school.id} school={school} />
            ))
          ) : null
        ) : (
          <div>
            <SchoolForm
              name="addSchool"
              onSubmit={e => this.handleAddSchool(e)}>
              <SchoolName
                name="schoolName"
                placeholder="School Name"
                value={this.state.schoolName}
                onChange={e => this.handleChange(e)}
                required />
              <SchoolName
                name="schoolAddress"
                placeholder="School Address"
                onChange={e => this.handleChange(e)}
                required />
              <SchoolName 
                name="fundsRequested"
                placeholder="Amount"
                value={this.state.fundsRequested}
                onChange={e => this.handleChange(e)}
                requred />
              <AddSchool>Add School</AddSchool>
            </SchoolForm>

            {this.props.donorViewSchools ? (
              this.props.schools.map(school => (
                <School key={school.id} school={school} />
              ))
            ) : null}
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
  };
};

export default connect(
  mapStateToProps,
  {
    getAllSchools,
    getDonorSchools,
    addSchool,
  }
)(Home);