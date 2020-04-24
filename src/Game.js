import React, { Component } from 'react';


class Game extends Component {

    constructor(props) {
        super(props)
        const valuesArray = this.makeQuestion();
        this.state = {
            value1: valuesArray[0],
            value2: valuesArray[1],
            value3: valuesArray[2],
            proposedAnswer: valuesArray[3]
        };
    }

    makeQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
        return [value1, value2, value3, proposedAnswer];
    }

    updateState = (newValuesArray) => {
        this.setState(currentState=>({
            value1: newValuesArray[0],
            value2: newValuesArray[1],
            value3: newValuesArray[2],
            proposedAnswer: newValuesArray[3]
        }));
    }

    handleAnswer = (event) => {
        const newValuesArray = this.makeQuestion();
        const answerWasCorrect = this.evaluateAnswer(event.target.name);
        this.props.handleAnswer(answerWasCorrect);
        this.updateState(newValuesArray);

    }

    evaluateAnswer = (givenAnswer) => {
        const { value1, value2, value3, proposedAnswer } = this.state;
        const corrAnswer = value1 + value2 + value3;

        if (proposedAnswer === corrAnswer && givenAnswer === 'true' || 
            proposedAnswer !== corrAnswer && givenAnswer === 'false') {
            return true;
        }

        return false;

    }

    render() {
        const {value1, value2, value3, proposedAnswer} = this.state;
        return (
            <div>
                <div className="equation">
                    <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                        <button onClick={this.handleAnswer} name="true">True</button>
                        <button onClick={this.handleAnswer} name='false'>False</button>
                </div>
            </div>
        )
    }
}

export default Game;