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
	render() {
		return (
			<div className="answer-proposition">
				<div className="characters">
					<ul>
						{this.charactersArr(this.props.answer).map(char =>
							<li className="inline-block character">{char}</li>
						)}
					</ul>
				</div>
			</div>
		);
	}
}


