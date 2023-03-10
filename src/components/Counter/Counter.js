import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import css from './Counter.module.css';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import PropTypes from 'prop-types';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0
  }

  state = {
    goodValue: this.props.initialValue,
    neutralValue: this.props.initialValue,
    badValue: this.props.initialValue,
    totalValue: this.props.initialValue,
    percentageValue: this.props.initialValue,
  }
  

  countTotalFeedback = () => {
    this.setState(prevState => {
      return ({totalValue: this.state.totalValue + 1})
    }, () => this.countPositiveFeedbackPercentage())
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return ({percentageValue: prevState.percentageValue = Math.round((prevState.goodValue / prevState.totalValue) * 100)})
    })
  }
  handleGood = () => {
    this.countTotalFeedback()
    this.setState(prevState => {
      return ({goodValue: this.state.goodValue + 1})
    })
  }

  handleNeutral = () => {
    this.countTotalFeedback()
    this.setState({
      neutralValue: this.state.neutralValue + 1,
    })
  }

  handleBad = () => {
    this.countTotalFeedback()
    this.setState({
      badValue: this.state.badValue + 1,
    })
  }

  render() {
    const { badValue, goodValue, neutralValue, totalValue, percentageValue } = this.state
    return (
      <div>
        <div className={css.counter}>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              clickGood={this.handleGood}
              clickNeutral={this.handleNeutral}
              clickBad={this.handleBad}
            />
          </Section>
          <p className={css.title}>Statistics</p>
          {totalValue > 0 ? 
            <Section>
              <Statistics 
                good={goodValue}
                neutral={neutralValue}
                bad={badValue}
                total={totalValue}
                positivePercentage={percentageValue}
              />
            </Section>
             : <Notification message="There is no feedback" />  
          }

        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  initialValue: PropTypes.number,
}; 

export default Counter;
