import { combineReducers } from 'redux';
import ProgressBarReducer from './reducer_progressBar';
import AuthenticationReducer from './authentication';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
	auth: AuthenticationReducer,
	loader: ProgressBarReducer,
	form: FormReducer
});

export default rootReducer;
