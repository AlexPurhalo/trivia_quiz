// Node modules import
import React, { Component } from 'react'

// Shows message about work progress
export default class ProgressMessage extends Component {
	success() {
		return (
			<div className="success-message">
				Correct
			</div>
		);
	}

	failure() {
		return (
			<div className="failure-message">
				Damn!
			</div>
		);
	}

	render() {
		return (
			<div className="progress-message">
				{this.props.condition === true && this.success()}
				{this.props.condition === false && this.failure()}
			</div>
		);
	}
}
