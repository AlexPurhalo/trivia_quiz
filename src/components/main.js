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
		console.log(`question property from parent component: ${this.props.question}`);
		return (
			<div className="main-page">
				<ActivityLog />
				<QuestionInfo />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { question: state.questions.question }
}

export default connect(mapStateToProps, { fetchQuestion })(Main);
