import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, getAllSchools, deleteSchool, addSchool } from '../../actions';

import { Wrap, SchoolForm, SchoolName, AddSchool } from '../../styles/index';
import School from '../school/School';

class Home extends Component {
	state = {
		schoolname: '',
		donation: '',
		isEditing: false,
		isAdding: false,
	}

	componentDidMount() {
		// let userToken = localStorage.getItem('userToken');
		// this.props.getAllSchools(userToken);
		// this.props.getUserInfo(userToken);
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({ [e.target.name] : e.target.value });
	};

	handleAddSchool = e => {
		e.preventDefault();
		let userToken = localStorage.getItem('userToken');
		let school = { schoolname: this.state.schoolname };
		this.props.addSchool(userToken, school);
		this.props.getAllSchools(userToken);
	};

	render() {
		return (
			<Wrap>
				{/* {this.props.user.userRole === 'admin' ? ( */}
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
				{/* ) : null } */}
				{/* {this.props.schools.map(school => ( */}
					<School />
				{/* ))} */}
			</Wrap>
		);
	}
}

export default Home;