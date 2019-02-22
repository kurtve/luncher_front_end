import axios from 'axios';

export const REGISTER_START = 'REGISTER_START ';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_START = 'LOGIN_START ';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const registerUser = user => dispatch => {
	dispatch({ type: REGISTER_START });
	axios({
		method: 'post',
		url: `http://localhost:4040/admins/register`,
		data: {
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			password: user.password,
			type: user.type,
			username: user.username,
		},
	})
		.then(res => {
			dispatch({ type: REGISTER_SUCCESS, payload: res });
			window.location.reload();
		})
		.catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
};

export const loginUser = user => dispatch => {
	dispatch({ type: LOGIN_START });
	axios({
		method: 'post',
		url: `http://localhost:4040/admins/login`,
		data: {
			password: user.password,
			username: user.username,
    },
	})
		.then(res => {
			dispatch({ type: LOGIN_SUCCESS, payload: res });
      localStorage.setItem('jwt', res.data.token);
			window.location.reload();
		})
		.catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};