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

	checkCondition() {
		if (this.props.checkCondition === true ) {
			return 'success-answer'
		} else if (this.props.checkCondition === false ) {
			return 'failure-answer'
		} else {
			return ''
		}
	}
	render() {
		return(
			<div className="answer-building">
				<div className={`answer-container ${this.checkCondition()} `}>
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
