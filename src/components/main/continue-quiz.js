// Node modules import
import React, { Component } from 'react'

// Allows get next quiz
export default class ContinueQuiz extends Component {
	showNextQuizButton(condition) {
		if (condition === true) {
			return (<div className="next-question">Next Question</div>)
		}
	}

	render() {
		return (
			<div>
				{this.showNextQuizButton(this.props.checkCondition)}
			</div>
		);
	}
}
