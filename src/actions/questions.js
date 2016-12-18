// Node modules import
import axios from 'axios';

// Action's types import
import {
	FETCH_QUESTION,
	INCREMENT_QUESTIONS_COUNT,
	CHAR_RELOCATION_TO_BOARD,
	CHAR_RELOCATION_TO_PROPOSITION,
	CLEAR_ANSWER_BOARD
} from '../constants/questions';

import { strToObjsArr } from '../functions/string-to-objects-array';
// Receives a random question
export function fetchQuestion() {
	return function(dispatch) {
		return axios.get('http://jservice.io/api/random')
			.then(response => {
				let question = response.data[0];

				dispatch({
					type: FETCH_QUESTION,
					payload: {
						id: question.id,
						answer: question.answer,
						category: question.category.title,
						question: question.question,
						answerInProposition: strToObjsArr(question.answer)
					}
				})
			});
	}
}

export function incrementQuestionsCount() {
	return function(dispatch) {
		dispatch({
			type: INCREMENT_QUESTIONS_COUNT
		})
	}
}


export function charRelocationToBoard(char) {
	return function (dispatch) {
		dispatch({
			type: CHAR_RELOCATION_TO_BOARD,
			payload: char
		})
	}
}

export function charRelocationToProposition(char) {
	return function (dispatch) {
		dispatch({
			type: CHAR_RELOCATION_TO_PROPOSITION,
			payload: char
		})
	}
}

export function clearAnswerBoard() {
	return function(dispatch) {
		dispatch({
			type: CLEAR_ANSWER_BOARD
		})
	}
}
