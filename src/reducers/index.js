// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import questionsReducer from './questions';

// State holding in combine reducers
const rootReducer = combineReducers({
	questions: questionsReducer
});

export default rootReducer;
