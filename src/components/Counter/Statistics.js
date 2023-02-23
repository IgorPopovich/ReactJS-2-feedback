import React from 'react';
import './Counter.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return  <div className='result'>
                <span className='value'>Good: {good}</span>
                <span className='value'>Neutral: {neutral}</span>
                <span className='value'>Bad: {bad}</span>
                <span className='value'>Total: {total}</span>
                <span className='value'>Positive feedback: {positivePercentage}%</span>
            </div>
}

export default Statistics;
