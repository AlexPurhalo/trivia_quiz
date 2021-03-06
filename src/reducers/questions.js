// Functions import
import { objsArrToString } from '../functions/asnwer-transformation';

// Action's types import
import {
	FETCH_QUESTION,
	INCREMENT_QUESTIONS_COUNT,
	CHAR_RELOCATION_TO_BOARD,
	CHAR_RELOCATION_TO_PROPOSITION,
	CHECK_ANSWER,
	INCREMENT_CORRECT_QUESTIONS
} from '../constants/questions';

// Initial states for reducers
const INITIAL_STATE = {
	question: null,
	questionsCount: 0,
	answerOnBoard: [],
	answerInProposition: [],
	answerCheckCondition: null,
	correctAnswers: 0
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_QUESTION:
			return {
				...state,
				question: action.payload,
				answerInProposition: action.payload.answerInProposition,
				answerOnBoard: [],
				answerCheckCondition: null
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
			array = array.filter(function(item) { return item !== val });

			return {
				...state,
				answerInProposition: [...state.answerInProposition, action.payload ],
				answerOnBoard: array,
				answerCheckCondition: null
			};

		case CHECK_ANSWER:
			const userAnswer = objsArrToString(state.answerOnBoard);
			const actualAnswer = state.question.answer;
			let answer;

			if (state.answerInProposition.length <= 0) {
				if (userAnswer === actualAnswer) answer = true;
				if (userAnswer !== actualAnswer) answer = false;
			} else {
				answer = null;
			}
			return {
				...state, answerCheckCondition: answer
			};

		case INCREMENT_CORRECT_QUESTIONS:
			return { ...state,
				correctAnswers: state.correctAnswers + 1,
				questionsCount: state.questionsCount + 1,
				answerOnBoard: [],
				answerCheckCondition: null,
			};

		default:
			return state;
	}
}
