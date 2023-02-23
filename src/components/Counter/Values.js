import React from 'react';
import './Counter.css';

const Values = ({ goodValue, neutralValue, badValue, totalValue, positiveValue }) => {

    return  <div className='result'>
                <span className='value'>Good: {goodValue}</span>
                <span className='value'>Neutral: {neutralValue}</span>
                <span className='value'>Bad: {badValue}</span>
                <span className='value'>Total: {totalValue}</span>
                <span className='value'>Positive feedback: {positiveValue}%</span>
            </div>
}

export default Values;
