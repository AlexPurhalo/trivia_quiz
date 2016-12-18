// Node modules import
import React, { Component } from 'react'
import { connect } from 'react-redux';

// Components import
import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';
import SkipQuestion from './main/skip-question';
import AnswerBuilding from './main/answer-building';
import AnswerProposition from './main/answer-proposition';
import Loader from './loader';

// Actions import
import {
	fetchQuestion,
	incrementQuestionsCount,
	charRelocationToBoard,
	charRelocationToProposition,
	clearAnswerBoard
} from '../actions/questions';

// Renders main page of application
class Main extends Component {
	componentWillMount() {
		this.props.fetchQuestion();
	}

	render() {
		// console.log(`question property from parent component: ${this.props.question}`);
		return (
			<div className="main-page">
				{this.props.question ? (
					<div>
						<ActivityLog
							questionsTotalCount={this.props.questionsTotalCount} />
						<QuestionInfo
							id={this.props.question.id}
							category={this.props.question.category}
							description={this.props.question.question} />
						<SkipQuestion
							skipQuestion={this.props.fetchQuestion}
							incrementQuestionsCount={this.props.incrementQuestionsCount}
							clearAnswerBoard={this.props.clearAnswerBoard} />
						<AnswerBuilding
							characters={this.props.answerCharacters}
							charRelocationToProposition={this.props.charRelocationToProposition} />
						<AnswerProposition
							answer={this.props.answerInProposition}
							charRelocationToBoard={this.props.charRelocationToBoard} />
					</div>
				) : <Loader />}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		question: state.questions.question,
		questionsTotalCount: state.questions.questionsCount,
		answerInProposition: state.questions.answerInProposition,
		answerCharacters: state.questions.answerOnBoard
	}
}

export default connect(
	mapStateToProps, {
		fetchQuestion,
		incrementQuestionsCount,
		charRelocationToProposition,
		charRelocationToBoard,
		clearAnswerBoard
	}
)(Main);
