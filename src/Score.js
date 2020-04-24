import React, { Component } from 'react'



class Score extends Component {
    render() {
        return (
        <p className='text'>Your Score: {this.props.correctAnswers} / {this.props.numQuestions}</p>
        )
    }
}



export default Score;