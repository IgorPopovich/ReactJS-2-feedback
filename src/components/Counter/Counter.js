import React, { Component } from 'react';
import Controls from './Controls';
import './Counter.css';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  }

  countTotalFeedback() {

  }

  countPositiveFeedbackPercentage() {

  }

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
  }

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  }

  render() {
    return (
      <div>
        <div className='counter'>
          <p className='title'>Please leave feedback</p>
          <Controls
            clickGood={this.handleGood}
            clickNeutral={this.handleNeutral}
            clickBad={this.handleBad}
          />
          <p className='title'>Statistics</p>
          <div className='result'>
            <span className='value'>Good: {this.state.good}</span>
            <span className='value'>Neutral: {this.state.neutral}</span>
            <span className='value'>Bad: {this.state.bad}</span>
            <span className='value'>Total: {this.state.total}</span>
            <span className='value'>Positive feedback: 0%</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter;
