// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { receiveAnswerCharacter } from '../../actions/questions';

// Shows characters that contains answer
class AnswerProposition extends Component {
	constructor() {
		super();

		this.removeChar = this.removeChar.bind(this);
		this.state = { answArr: ''}
	}

	componentWillMount() {
		this.charactersArr(this.props.answer);
	}

	charactersArr(answer) {
		let answArr = [];
		for(let i = 0; i < answer.length; i++) {
			answArr.push(answer[i]);
		}

		this.setState({ answArr: answArr})
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
							onClick={e => this.removeChar(char)}
							className={`inline-block character ${char.name === ' ' && 'space-as-character'}`}>
							{char.name}
						</li>
					)
				}
			)
		)
	}

	removeChar(char) {
		const charId = char.id;
		let charsArr = this.state.answArr;

		let index = charsArr.indexOf(charsArr[charId]);

		charsArr.splice(index, 1);

		this.setState({ answArr: charsArr });
		// add to another arr (use actions)
		this.props.receiveAnswerCharacter(charId)

	}
	render() {
		let randomChars = this.randomize(this.state.answArr);

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

export default connect(null, { receiveAnswerCharacter })(AnswerProposition);
