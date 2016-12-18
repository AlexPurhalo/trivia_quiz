// Action's types import
import {
	FETCH_QUESTION,
	INCREMENT_QUESTIONS_COUNT,
	RECEIVE_CHARACTER
} from '../constants/questions';

// Initial states for reducers
const INITIAL_STATE = {
	question: null,
	questionsCount: 0,
	answerCharacter: null
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_QUESTION:
			// console.log(`action's payload from reducer: ${action.payload}`);
			return { ...state, question: action.payload };
		case INCREMENT_QUESTIONS_COUNT:
			console.log(`counter: ${state.questionsCount}`);
			return { ...state, questionsCount: state.questionsCount + action.payload};
		case RECEIVE_CHARACTER:
			// console.log(action.payload);
			return { ...state, answerCharacter: action.payload };
		default:
			return state;
	}
}
