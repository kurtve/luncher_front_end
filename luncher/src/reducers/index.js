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
	user: [],
	firstName: '',
	lastName: '',
	userRole: '',
	userName: '',
	email: '',
	password: '',
	id: '',
	token: '',
	schools: [],
	schoolData: [],
	donorViewSchools: [],
	donorViewData: [],
	schoolEdit: '',
	schoolAdded: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_START:
			return { ...state };
		case REGISTER_SUCCESS:
			return { ...state };
		case REGISTER_FAILURE:
			return { ...state };
		case LOGIN_START:
			return { ...state };
		case LOGIN_SUCCESS:
			return { ...state, token: action.payload.data };
		case LOGIN_FAILURE:
			return { ...state };
		case GET_ALLSCHOOLS_START:
			return { ...state };
		case GET_ALLSCHOOLS_SUCCESS:
			return { ...state, schools: action.payload.data};
		case GET_ALLSCHOOLS_FAILURE:
			return { error: action.payload };
		case GET_SCHOOLDATA_START:
			return { ...state, };
		case GET_SCHOOLDATA_SUCCESS:
			return { ...state, schoolData: action.payload };
		case GET_SCHOOLDATA_FAILURE:
			return { ...state };
		case GET_DONORVIEW_START:
			return { ...state };
		case GET_DONORVIEW_SUCCESS:
			return { ...state, donorViewSchools: action.payload.data };
		case GET_DONORVIEW_FAILURE:
			return { error: action.payload };
		case GET_DONORVIEWDATA_START:
			return { ...state, };
		case GET_DONORVIEWDATA_SUCCESS:
			return {...state, donorViewData: action.payload };
		case GET_DONORVIEWDATA_FAILURE:
			return { ...state };
		case ADD_SCHOOL_START:
			return { ...state, schoolAdded: []};
		case ADD_SCHOOL_SUCCESS:
			return { ...state, schoolAdded: [...state.schoolAdded, action.payload]};
		case ADD_SCHOOL_FAILURE:
			return { error: action.payload, schoolAdded: []};
		case DELETE_SCHOOL_START:
			return { ...state };
		case DELETE_SCHOOL_SUCCESS:
			return { ...state };
		case DELETE_SCHOOL_FAILURE:
			return { error: action.payload };
		case SCHOOL_EDIT_START:
			return { ...state };
		case SCHOOL_EDIT_SUCCESS:
			return { ...state, schoolData: action.payload };
		case SCHOOL_EDIT_FAILURE:
			return { ...state, schoolData: '' };
		default:
			return state;
		}
};

export default reducer;

