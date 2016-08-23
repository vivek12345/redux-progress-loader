import {
	SHOW_LOADER,
	HIDE_LOADER,
	INCREMENT_LOADER
} from '../actions/types';

export default function(state = { loading: false }, action) {
	switch(action.type) {
		case SHOW_LOADER:
			return { ...state, loading: true };
		case HIDE_LOADER:
			return { ...state, loading: false };
	}
	return state;
}
