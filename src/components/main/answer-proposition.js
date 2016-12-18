// Node modules import
import React, { Component } from 'react'

// Shows characters that contains answer
export default class AnswerProposition extends Component {
	constructor() {
		super();

		this.removeChar = this.removeChar.bind(this);
	}
	charactersArr(answer) {
		let answArr = [];
		for(let i = 0; i < answer.length; i++) {
			answArr.push(answer[i]);
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

	returnChar(array) {
		let chars = [];

		for(let i = 0; i < array.length; i++) {
			let char = { name: array[i], id: i};
			chars.push(char);
		}

		return (
			chars.map(char => {
					return (
						<li
							key={char.id}
							onClick={e => this.removeChar(char.id)}
							className={`inline-block character ${char.name === ' ' && 'space-as-character'}`}>
							{char.name}
						</li>
					)
				}
			)
		)
	}

	removeChar(charId) {
		console.log(charId)
	}
	render() {
		let chars = this.charactersArr(this.props.answer);
		let randomChars = this.randomize(chars);

		return (
			<div className="answer-proposition">
				<div className="answer-container">
					<div className="random-characters">
						<ul className="inline-list">
							{this.returnChar(randomChars)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
