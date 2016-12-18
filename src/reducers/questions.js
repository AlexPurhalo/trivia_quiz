// Action's types import
import {
	FETCH_QUESTION,
	INCREMENT_QUESTIONS_COUNT,
	CHAR_RELOCATION_TO_BOARD,
	CHAR_RELOCATION_TO_PROPOSITION,
	CLEAR_ANSWER_BOARD
} from '../constants/questions';

// Initial states for reducers
const INITIAL_STATE = {
	question: null,
	questionsCount: 0,
	answerOnBoard: [],
	answerInProposition: []
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_QUESTION:
			return {
				...state,
				question: action.payload,
				answerInProposition: action.payload.answerInProposition
			};

		case INCREMENT_QUESTIONS_COUNT:
			return { ...state, questionsCount: state.questionsCount + 1 };

		case CHAR_RELOCATION_TO_BOARD:
			let arr = state.answerInProposition, value = action.payload;
			arr = arr.filter(function(item) { return item !== value });

			return {
				...state,
				answerInProposition: arr,
				answerOnBoard: [...state.answerOnBoard, action.payload]
			};

		case CHAR_RELOCATION_TO_PROPOSITION:
			let array = state.answerOnBoard, val = action.payload;
			console.log(array);
			array = array.filter(function(item) { return item !== val });
			console.log(array);
			return {
				...state,
				answerInProposition: [...state.answerInProposition, action.payload ],
				answerOnBoard: array
			};

		case CLEAR_ANSWER_BOARD:
			return { ...state, answerOnBoard: [] };

		default:
			return state;
	}
}
