// Node modules import
import React, { Component } from 'react'
import { connect } from 'react-redux';

// Shows section that allows to build answer
export default class AnswerBuilding extends Component {
	constructor() {
		super();

		this.removeChar = this.removeChar.bind(this);
	}

	removeChar(char) {
		this.props.charRelocationToProposition(char);
	}

	showCharacters(characters) {
		return (
			characters.map(char => {
					return (
						<li
							onClick={e => this.removeChar(char)}
							className={`inline-block character ${char.name === ' ' && 'space-as-character'}`}
							key={char.id}>
							{char.name}
						</li>
					);
				}
			)
		);
	}

	render() {
		return(
			<div className="answer-building">
				<div className="answer-container">
					<div className="characters-place">
						<ul className="inline-list">
							{
								this.showCharacters(this.props.characters)
							}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
