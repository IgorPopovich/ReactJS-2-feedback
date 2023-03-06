import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return  <div className={css.result}>
                <span className={css.value}>Good: {good}</span>
                <span className={css.value}>Neutral: {neutral}</span>
                <span className={css.value}>Bad: {bad}</span>
                <span className={css.value}>Total: {total}</span>
                <span className={css.value}>Positive feedback: {positivePercentage}%</span>
            </div>
}

Statistics.propTypes = {
    good: PropTypes.number,
    meneutralssage: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  }; 

export default Statistics;
