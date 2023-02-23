import React, { Component } from 'react';
import Controls from './Controls';
import './Counter.css';
import Values from './Values';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0
  }

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue
  }

  countTotalFeedback() {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }))
  }

  countPositiveFeedbackPercentage() {

  }

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }), this.countTotalFeedback())
  }

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }), this.countTotalFeedback())
  }

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }), this.countTotalFeedback())
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
          {this.state.total > 0 && 
            <Values 
              goodValue={this.state.good}
              neutralValue={this.state.neutral}
              badValue={this.state.bad}
              totalValue={this.state.total}
              positiveValue={0}
            />
          }

        </div>
      </div>
    )
  }
}

export default Counter;
