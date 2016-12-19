// Node modules import
import React, { Component } from 'react';

// Shows characters that contains answer
export default class AnswerProposition extends Component {
	constructor() {
		super();

		this.removeChar = this.removeChar.bind(this);
	}

	// removes a char object from array
	removeChar(char) {
		this.props.charRelocationToBoard(char);
		this.props.checkAnswer();
	}

	renderCharacter(characters) {
		return (
			characters.map(char =>
				<li
					onClick={e => this.removeChar(char)}
					className={`inline-block character ${char.name === ' ' && 'space-as-character'}`}
					key={char.id}>
					{char.name}
				</li>
			)
		);
	}

	render() {
		return (
			<div className="answer-proposition">
				<div className="answer-container">
					<div className="random-characters">
						<ul className="inline-list">
							{this.renderCharacter(this.props.answer)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

