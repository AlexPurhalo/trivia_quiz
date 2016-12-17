// Node modules import
import React, { Component } from 'react'
import { connect } from 'react-redux';

// Components import
import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';
import SkipQuestion from './main/skip-question';

// Actions import
import { fetchQuestion, incrementQuestionsCount } from '../actions/questions';

// Renders main page of application
class Main extends Component {
	componentWillMount() {
		this.props.fetchQuestion();
	}

	render() {
		// console.log(`question property from parent component: ${this.props.question}`);
		return (
			<div className="main-page">
				<ActivityLog
					questionsTotalCount={this.props.questionsTotalCount}/>
				{this.props.question &&
				<QuestionInfo
					id={this.props.question.id}
					category={this.props.question.category.title}
					description={this.props.question.question}
				/>
				}
				<SkipQuestion
					skipQuestion={this.props.fetchQuestion}
					incrementQuestionsCount={this.props.incrementQuestionsCount}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		question: state.questions.question,
		questionsTotalCount: state.questions.questionsCount
	}
}

export default connect(mapStateToProps, { fetchQuestion, incrementQuestionsCount })(Main);
