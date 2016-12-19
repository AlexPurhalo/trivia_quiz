// Node modules import
import React, { Component } from 'react'
import { connect } from 'react-redux';

// Components import
import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';
import SkipQuestion from './main/skip-question';
import ProgressMessage from './main/progress-message';
import AnswerBuilding from './main/answer-building';
import AnswerProposition from './main/answer-proposition';
import ContinueQuiz from './main/continue-quiz';
import Loader from './loader';

// Actions import
import {
	fetchQuestion,
	incrementQuestionsCount,
	charRelocationToBoard,
	charRelocationToProposition,
	checkAnswer,
	incrementCorrectAnswersCount
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
							questionsTotalCount={this.props.questionsTotalCount}
							correctAnswersCount={this.props.correctAnswersCount} />
						<QuestionInfo
							id={this.props.question.id}
							category={this.props.question.category}
							description={this.props.question.question} />
						<SkipQuestion
							fetchNextQuestion={this.props.fetchQuestion}
							incrementQuestionsCount={this.props.incrementQuestionsCount} />
						<ProgressMessage condition={this.props.answerCheckCondition} />
						<AnswerBuilding
							characters={this.props.answerCharacters}
							charRelocationToProposition={this.props.charRelocationToProposition}
							checkCondition={this.props.answerCheckCondition} />
						{this.props.answerCheckCondition === null ?
							(
								<AnswerProposition
									answer={this.props.answerInProposition}
									charRelocationToBoard={this.props.charRelocationToBoard}
									checkAnswer={this.props.checkAnswer} />
							) :
							(
								<ContinueQuiz
									checkCondition={this.props.answerCheckCondition}
									incrementCorrectAnswersCount={this.props.incrementCorrectAnswersCount}
									fetchNextQuestion={this.props.fetchQuestion} />
							)
						}

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
		answerCharacters: state.questions.answerOnBoard,
		answerCheckCondition: state.questions.answerCheckCondition,
		correctAnswersCount: state.questions.correctAnswers
	}
}

export default connect(
	mapStateToProps, {
		fetchQuestion,
		incrementQuestionsCount,
		charRelocationToProposition,
		charRelocationToBoard,
		checkAnswer,
		incrementCorrectAnswersCount
	}
)(Main);
