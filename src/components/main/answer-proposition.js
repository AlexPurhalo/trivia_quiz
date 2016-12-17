// Node modules import
import React, { Component } from 'react'

// Shows characters that contains answer
export default class AnswerProposition extends Component {
	render() {
		return (
			<div className="answer-proposition">
				<div className="characters">
					<ul>
						<li className="inline-block character">A</li>
						<li className="inline-block character">B</li>
						<li className="inline-block character">S</li>
						<li className="inline-block character">D</li>
					</ul>
				</div>
			</div>
		);
	}
}
