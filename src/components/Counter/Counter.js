import React, { Component } from 'react';
import Controls from './Controls';
import './Counter.css';
import Values from './Values';
import Notification from './Notification';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0
  }

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    percentage: this.props.initialValue,
  }
  

  countTotalFeedback = () => {
    this.setState(prevState => {
      return ({total: this.state.total + 1})
    }, () => this.countPositiveFeedbackPercentage())
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return ({percentage: prevState.percentage = Math.round((prevState.good / prevState.total) * 100)})
    })
  }
  handleGood = () => {
    this.countTotalFeedback()
    this.setState(prevState => {
      return ({good: this.state.good + 1})
    })
  }

  handleNeutral = () => {
    this.countTotalFeedback()
    this.setState({
      neutral: this.state.neutral + 1,
    })
  }

  handleBad = () => {
    this.countTotalFeedback()
    this.setState({
      bad: this.state.bad + 1,
    })
  }

  render() {
    const { bad, good, neutral, total, percentage } = this.state
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
          {total > 0 ? <Values 
              goodValue={good}
              neutralValue={neutral}
              badValue={bad}
              totalValue={total}
              positiveValue={percentage}
            /> : <Notification message="There is no feedback" />  
          }

        </div>
      </div>
    )
  }
}

export default Counter;
