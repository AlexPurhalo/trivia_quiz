// Node modules import
import React, { Component } from 'react'

// Allows get next quiz
export default class ContinueQuiz extends Component {
	showNextQuizButton(condition) {
		if (condition === true) {
			return (<div className="next-question">Next Question</div>)
		}
	}

	nextQuestion() {
		this.props.incrementCorrectAnswersCount();
		this.props.fetchNextQuestion()
	}

	render() {
		return (
			<div onClick={this.nextQuestion.bind(this)}>
				{this.showNextQuizButton(this.props.checkCondition)}
			</div>
		);
	}
}
