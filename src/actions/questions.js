// Node modules import
import axios from 'axios';

// Action's types import
import { FETCH_QUESTION } from '../constants/questions';

// Receives a random question
export function fetchQuestion() {
	return function(dispatch) {
		return axios.get('http://jservice.io/api/random')
			.then(response => {
				console.log(`response data object from action: ${response.data[0]}`);
				dispatch({
					type: FETCH_QUESTION,
					payload: response.data[0]
				})
			});
	}
}
