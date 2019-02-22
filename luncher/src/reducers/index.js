import {
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	GET_ALLSCHOOLS_START,
	GET_ALLSCHOOLS_SUCCESS,
	GET_ALLSCHOOLS_FAILURE,
	DELETE_SCHOOL_START,
	DELETE_SCHOOL_SUCCESS,
	DELETE_SCHOOL_FAILURE,
	ADD_SCHOOL_START,
	ADD_SCHOOL_SUCCESS,
	ADD_SCHOOL_FAILURE,
	GET_SCHOOLDATA_START,
	GET_SCHOOLDATA_SUCCESS,
	GET_SCHOOLDATA_FAILURE,
	GET_DONORVIEW_START,
	GET_DONORVIEW_SUCCESS,
	GET_DONORVIEW_FAILURE,
	GET_DONORVIEWDATA_START,
	GET_DONORVIEWDATA_SUCCESS,
	GET_DONORVIEWDATA_FAILURE,
	SCHOOL_EDIT_START,
	SCHOOL_EDIT_SUCCESS,
	SCHOOL_EDIT_FAILURE,
} from '../actions/';

const initialState = {
	isLoading: false,
	//user data
	user: [],
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
	donorViewSchools: [],
	donorViewData: [],
	schoolEdit: '',
	isSchoolEditing: false,
	schoolAdded: [],
	//donation data
	schoolDonations: [],
	isEditingDonation: false,
	//componentDidUpdate booleans
	getAllSchoolIsUpdating: false,
	schoolDonationsIsUpdating: false,
	schoolDonationsIsDeleting: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	// REGISTER
		case REGISTER_START:
			return { ...state };
		case REGISTER_SUCCESS:
			return { ...state };
		case REGISTER_FAILURE:
			return { ...state };

	// LOGIN
		case LOGIN_START:
			return { ...state };
		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload.data,
			};
		case LOGIN_FAILURE:
			return { ...state };

		// GET ALL SCHOOLS
		case GET_ALLSCHOOLS_START:
			return { ...state };
		case GET_ALLSCHOOLS_SUCCESS:
			return {
				...state,
				schools: action.payload.data,
			};
		case GET_ALLSCHOOLS_FAILURE:
			return { error: action.payload };

			//GET SCHOOL DATA
		case GET_SCHOOLDATA_START:
			return { ...state, };
		case GET_SCHOOLDATA_SUCCESS:
			return {
				...state,
				schoolData: action.payload,
			};
		case GET_SCHOOLDATA_FAILURE:
			return { ...state };

		//GET DONOR VIEW SCHOOLS
		case GET_DONORVIEW_START:
			return { ...state };
		case GET_DONORVIEW_SUCCESS:
			return {
				...state,
				donorViewSchools: action.payload.data,
			};
		case GET_DONORVIEW_FAILURE:
			return { error: action.payload };

		// GET DONOR VIEW DATA
		case GET_DONORVIEWDATA_START:
				return { ...state, };
		case GET_DONORVIEWDATA_SUCCESS:
			return {
				...state,
				donorViewData: action.payload,
			};
		case GET_DONORVIEWDATA_FAILURE:
			return { ...state };

		// ADD SCHOOL
		case ADD_SCHOOL_START:
			return {
				...state,
				schoolAdded: [],
			};
		case ADD_SCHOOL_SUCCESS:
			return {
				...state,
				schoolAdded: [...state.schoolAdded, action.payload],
			};
		case ADD_SCHOOL_FAILURE:
			return {
				error: action.payload,
				schoolAdded: [],
			};

		// DELETE SCHOOL
		case DELETE_SCHOOL_START:
			return { ...state };
		case DELETE_SCHOOL_SUCCESS:
			return { ...state };
		case DELETE_SCHOOL_FAILURE:
			return { error: action.payload };

		// SCHOOL EDIT
		case SCHOOL_EDIT_START:
			return {
				...state,
				isSchoolEditing: true,
			};
		case SCHOOL_EDIT_SUCCESS:
			return {
				...state,
				isSchoolEditing: false,
				schoolData: action.payload,
			};
		case SCHOOL_EDIT_FAILURE:
			return {
				...state,
				schoolData: '',
				schoolInfoIsUpdating: false
			};

		default:
			return state;
		}
		//DELET/
	// //DONATIONS
	// 	case GET_SCHOOL_DONATIONS_START:
	// 		return {};
	// 	case GET_SCHOOL_DONATIONS_SUCCESS:
	// 		return {};
	// 	case GET_SCHOOL_DONATIONS_FAILURE:
	// 		return {};
	// //DONATIONS_2
	// 	case GET_SCHOOL_DONATIONS_START_2:
	// 		return {};
	// 	case GET_SCHOOL_DONATIONS_SUCCESS_2:
	// 		return {};
	// 	case GET_SCHOOL_DONATIONS_FAILURE_2:
	// 		return {};
	// SCHOOL EDIT

	// //donationByUser
	// 	case USER_DONATIONS_START:
	// 		return {};
	// 	case USER_DONATIONS_SUCCESS:
  //     return {};
	// 	case USER_DONATIONS_FAILURE:
  //     return {};
	// //Add Donation
	// 	case ADD_DONATION_START:
  //     return {};
	// 	case ADD_DONATION_SUCCESS:
  //     return {};
	// 	case ADD_DONATION_FAILURE:
  //     return {};
	// //Delete Donation
	// 	case DELETE_DONATION_START:
  //     return {};
	// 	case DELETE_DONATION_SUCCESS:
  //     return {};
	// 	case DELETE_DONATION_FAILURE:
  //     return {};
	// //Edit Donation
	// 	case EDIT_DONATION_START:
  //     return {};
	// 	case EDIT_DONATION_SUCCESS:
  //     return {};
	// 	case EDIT_DONATION_FAILURE:
  //     return {};
	// //get all donations by school id
	// 	case GET_ALL_DONATIONS_SCHOOL_START:
  //     return {};
	// 	case GET_ALL_DONATIONS_SCHOOL_SUCCESS:
  //     return {};
	// 	case GET_ALL_DONATIONS_SCHOOL_FAILURE:
  //     return {};
};

export default reducer;

