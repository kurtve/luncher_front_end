const initialState = {
	isLoading: false,
	//user data
	user: [],
	isEditingUser: false,
	firstName: '',
	lastName: '',
	userRole: '',
	userName: '',
	email: '',
	password: '',
	id: '',
	token: '',
	//school data
	schools: [],
	schoolData: [],
	schoolEdit: '',
	isSchoolEditing: false,
	schoolAdded: [],
	//donation data
	schoolDonations: [],
	isEditingDonation: false,
	getAllSchoolIsLoading: false,
	donationsByUser: [],
	//ERRORS
	deleteError: '',
	editError: '',
	loginError: '',
	registerError: '',
	userInfoError: '',
	//componentDidUpdate booleans
	getAllSchoolIsUpdating: false,
	schoolDonationsIsUpdating: false,
	schoolDonationsIsDeleting: false,
	//Donations
	totalDonationsBySchool: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// REGISTER
		case REGISTER_START:
			return {};
		case REGISTER_SUCCESS:
			return {};
		case REGISTER_FAILURE:
			return {};
		//LOGIN
		case LOGIN_START:
			return {};
		case LOGIN_SUCCESS:
			return {};
		case LOGIN_FAILURE:
			return {};
		//USERINFO
		case GET_USERINFO_START:
			return {};
		case GET_USERINFO_SUCCESS:
			return {};
		case GET_USERINFO_FAILURE:
			return {};
		//GET ALL SCHOOLS
		case GET_ALLSCHOOLS_START:
			return {};
		case GET_ALLSCHOOLS_SUCCESS:
			return {};
		case GET_ALLSCHOOLS_FAILURE:
			return {};
		//DELETE SCHOOL
		case DELETE_SCHOOL_START:
			return {};
		case DELETE_SCHOOL_SUCCESS:
			return {};
		case DELETE_SCHOOL_FAILURE:
			return {};
		//ADD SCHOOL
		case ADD_SCHOOL_START:
			return {};
		case ADD_SCHOOL_SUCCESS:
			return {};
		case ADD_SCHOOL_FAILURE:
			return {};
		//GET SCHOOL DATA
		case GET_SCHOOLDATA_START:
			return {};
		case GET_SCHOOLDATA_SUCCESS:
			return {};
		case GET_SCHOOLDATA_FAILURE:
			return {};
		//DONATIONS
		case GET_SCHOOL_DONATIONS_START:
			return {};
		case GET_SCHOOL_DONATIONS_SUCCESS:
			return {};
		case GET_SCHOOL_DONATIONS_FAILURE:
			return {};
		//DONATIONS_2
		case GET_SCHOOL_DONATIONS_START_2:
			return {};
		case GET_SCHOOL_DONATIONS_SUCCESS_2:
			return {};
		case GET_SCHOOL_DONATIONS_FAILURE_2:
			return {};
		//SCHOOL EDIT
		case SCHOOL_EDIT_START:
			return {};
		case SCHOOL_EDIT_SUCCESS:
			return {};
		case SCHOOL_EDIT_FAILURE:
			return {};
		//donationByUser
		case USER_DONATIONS_START:
			return {};
		case USER_DONATIONS_SUCCESS:
      return {};
		case USER_DONATIONS_FAILURE:
      return {};
		//Add Donation
		case ADD_DONATION_START:
      return {};
		case ADD_DONATION_SUCCESS:
      return {};
		case ADD_DONATION_FAILURE:
      return {};
		//Delete Donation
		case DELETE_DONATION_START:
      return {};
		case DELETE_DONATION_SUCCESS:
      return {};
		case DELETE_DONATION_FAILURE:
      return {};
		//Delete Donation
		case EDIT_DONATION_START:
      return {};
		case EDIT_DONATION_SUCCESS:
      return {};
		case EDIT_DONATION_FAILURE:
      return {};
		//get all donations by school id
		case GET_ALL_DONATIONS_SCHOOL_START:
      return {};
		case GET_ALL_DONATIONS_SCHOOL_SUCCESS:
      return {};
		case GET_ALL_DONATIONS_SCHOOL_FAILURE:
      return {};
		//EDIT USER
		case EDIT_USER_START:
      return {};
		case EDIT_USER_SUCCESS:
      return {};
		case EDIT_USER_FAILURE:
      return {};
		default:
			return;
	}
};

export default reducer;

