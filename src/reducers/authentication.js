import {
	SHOW_LOADER,
	HIDE_LOADER,
	SIGNUP_USER,
	AUTH_ERROR
} from '../actions/types';

export default function(state={}, action) {
	switch(action.type) {
		case SIGNUP_USER:
			return {...state, error: '', authenticate: true}
		case AUTH_ERROR:
			return {...state, error: action.payload}
	}
	return state;
}
