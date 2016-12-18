// Node modules import
import axios from 'axios';

// Action's types import
import {
	FETCH_QUESTION,
	INCREMENT_QUESTIONS_COUNT,
	RECEIVE_CHARACTER
} from '../constants/questions';

// Receives a random question
export function fetchQuestion() {
	return function(dispatch) {
		return axios.get('http://jservice.io/api/random')
			.then(response => {
				// console.log(`response data object from action: ${response.data[0]}`);
				dispatch({
					type: FETCH_QUESTION,
					payload: response.data[0]
				})
			});
	}
}

export function incrementQuestionsCount() {
	return function(dispatch) {
		dispatch({
			type: INCREMENT_QUESTIONS_COUNT,
			payload: 1
		})
	}
}

export function receiveAnswerCharacter(char) {
	return function(dispatch) {
		// console.log(char);
		dispatch({
			type: RECEIVE_CHARACTER,
			payload: char
		})
	}
}
