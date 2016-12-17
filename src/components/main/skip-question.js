// Node modules import
import React, { Component } from 'react'

// Renders skip button that allows skip question
export default class SkipQuestion extends Component {
	skipQuestionClick() {
		this.props.skipQuestion();
		this.props.incrementQuestionsCount();
	}

	render() {
		return (
			<div className="skip-question" onClick={this.skipQuestionClick.bind(this)}>
				Skip
			</div>
		)
	}
}
