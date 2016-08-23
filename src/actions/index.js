import {
	SHOW_LOADER,
	HIDE_LOADER,
	SIGNUP_USER,
	AUTH_ERROR
} from './types';
import axios from 'axios';
let ROOT_URL = 'http://localhost:3000/';
export function showLoader() {
	return {
		type: SHOW_LOADER,
	}
}
export function hideLoader() {
	return {
		type: HIDE_LOADER,
	}
}
export function signupUser({ email, password }) {
	return dispatch => {
		axios.post(`${ROOT_URL}signup`, {email, password})
		.then(response => {
			localStorage.setItem('token', response.data.token);
			dispatch(showLoader());
			dispatch({
				type: SIGNUP_USER,
				payload: response
			});
		})
		.catch(error => {
			dispatch(authError("Error in loggin you in"));
		});
	}
}
function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}
