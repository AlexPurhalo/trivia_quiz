// Node modules import
import React, { Component } from 'react'

// Shows characters that contains answer
export default class AnswerProposition extends Component {
	charactersArr(answer) {
		let answArr = [];

		for(let i = 0; i < answer.length; i++) {
			answArr.push(answer[i])
		}

		return answArr
	}

	randomize(arr) {
		var curIndx = arr.length, tempVal, rndIndx;

		while (curIndx !== 0) {

			rndIndx = Math.floor(Math.random() * curIndx);
			curIndx -= 1;

			// swaps arr's values
			tempVal = arr[curIndx];
			arr[curIndx] = arr[rndIndx];
			arr[rndIndx] = tempVal;
		}

		return arr;
	}

	render() {
		return (
			<div className="answer-proposition">
				<div className="characters">
					<ul>
						{this.randomize(this.charactersArr(this.props.answer)).map(char =>
							<li className="inline-block character">{char}</li>
						)}
					</ul>
				</div>
			</div>
		);
	}
}
