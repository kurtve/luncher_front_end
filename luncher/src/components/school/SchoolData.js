import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSchoolData, deleteSchool, schoolEdit } from '../../actions';

import {
	Wrap,
	H2,
	SchoolWrap,
	SchoolSpan,
	SchoolButton,
	ButtonWrap,
	SchoolEdit,
	SchoolInput,
} from '../../styles/index';

class SchoolData extends Component {
  state = {
    isEditingSchool: false,
    schoolName: '',
		fundsRequested: '',
		schoolAddress: '',
		userToken: '',
  };

  componentDidMount() {
		let userToken = localStorage.getItem('jwt');
		this.setState({ userToken: userToken });
		this.props.getSchoolData(this.props.match.params.id);
	}
	
	handleChange = e => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};

	handleDeleteSchool = (e, schoolID) => {
		e.preventDefault();
		let userToken = localStorage.getItem('jwt');
		this.props.deleteSchool(userToken, schoolID);
		this.props.history.push('/');
	};

	handleEditSchool = e => {
		e.preventDefault();
		this.setState({
			isEditingSchool: true,
			schoolName: this.props.schoolData.schoolName,
			schoolAddress: this.props.schoolData.schoolAddress,
			fundsRequested: this.props.schoolData.fundsRequested
		});
	};

	closeEditSchool = e => {
		e.preventDefault();
		this.setState({ isEditingSchool: false });
	};

	submitEdit = e => {
		e.preventDefault();
		let userToken = localStorage.getItem('jwt');
		let info = {
			schoolName: this.state.schoolName,
			schoolAddress: this.state.schoolAddress,
			fundsRequested: this.state.fundsRequested
		};
		this.props.schoolEdit(userToken, info, this.props.match.params.id);
		this.setState({ isEditingSchool: false });
	}

  render() {
    return(
      <Wrap>
				<SchoolWrap>
					{this.state.userToken ? (
						<div>
							{!this.state.isEditingSchool ? (
								<ButtonWrap>
									<SchoolButton 
										onClick={e => this.handleDeleteSchool(e, this.props.schoolData.id)}>
										Delete
									</SchoolButton>
									<SchoolButton
										onClick={e => this.handleEditSchool(e)}>
										Edit
									</SchoolButton>
								</ButtonWrap>
							) : null}
							{this.state.isEditingSchool ? (
								<div>
									<SchoolEdit>
										<SchoolInput
											name="schoolName"
											placeholder={this.state.schoolName}
											value={this.state.schoolName}
											onChange={e => this.handleChange(e)} />
										<SchoolInput 
											name="schoolAddress"
											placeholder={this.state.schoolAddress}
											onChange={e => this.handleChange(e)} />
										<SchoolInput 
											name="fundsRequested"
											placeholder={this.state.fundsRequested}
											onChange={e => this.handleChange(e)} />
									</SchoolEdit>
									<ButtonWrap>
										<SchoolButton onClick={e => this.submitEdit(e)}>Submit</SchoolButton>
										<SchoolButton onClick={e => this.closeEditSchool(e)}>Close</SchoolButton>
									</ButtonWrap>
								</div>
							) : null }
						</div>
					) : null}
					<H2><SchoolSpan>Name:</SchoolSpan> {this.props.schoolData.schoolName}</H2>
					<H2><SchoolSpan>Address:</SchoolSpan> {this.props.schoolData.schoolAddress}</H2>
					<H2><SchoolSpan>Funds Requested:</SchoolSpan> {this.props.schoolData.fundsRequested}</H2>
					{this.state.userToken ? <H2><SchoolSpan>Funds Received:</SchoolSpan> {this.props.schoolData.fundsReceived}</H2> : null}
				</SchoolWrap>
      </Wrap>
    );
  }
}

const mapStateToProps = state => {
	return {
		token: state.userToken,
		schoolData: state.schoolData,
	};
};

export default connect(
	mapStateToProps,
	{
		getSchoolData,
		deleteSchool,
		schoolEdit,
	}
)(SchoolData);