// Node modules import
import React, { Component } from 'react'

// Shows section that allows to build answer
export default class AnswerBuilding extends Component {
	render() {
		return(
			<div className="answer-building">
				<div className="answer-container">
					<div className="characters-place">
						<ul className="inline-list">
							<li className="inline-block character">F</li>
							<li className="inline-block character">U</li>
							<li className="inline-block character space-as-character"> </li>
							<li className="inline-block character">K</li>
							<li className="inline-block empty-space character space-as-character"> </li>
							<li className="inline-block empty-space character space-as-character"> </li>
							<li className="inline-block empty-space character space-as-character"> </li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
