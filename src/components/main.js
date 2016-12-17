// Node modules import
import React, { Component } from 'react'
import { connect } from 'react-redux';

// Components import
import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';

// Actions import
import { fetchQuestion } from '../actions/questions';

// Renders main page of application
class Main extends Component {
	componentWillMount() {
		this.props.fetchQuestion();
	}

	render() {
		return (
			<div className="main-page">
				<ActivityLog />
				<QuestionInfo />
			</div>
		);
	}
}

export default connect(null, { fetchQuestion })(Main);
