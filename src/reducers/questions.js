// Action's types import
import { FETCH_QUESTION } from '../constants/questions';

// Initial states for reducers
const INITIAL_STATE = {
	question: null
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_QUESTION:
			console.log(`action's payload from reducer: ${action.payload}`);
			return { ...state, question: action.payload };
		default:
			return state;
	}
}
