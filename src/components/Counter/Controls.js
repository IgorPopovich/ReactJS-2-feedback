import React from 'react';
import './Counter.css';

const Controls = ({ clickGood, clickNeutral,clickBad }) => {

    return <div className='buttons'>
            <button className='btn' type='button' onClick={clickGood}>
              Good
            </button>
            <button className='btn' onClick={clickNeutral}>
              Neutral
            </button>
            <button className='btn' onClick={clickBad}>
              Bad
            </button>
          </div>
}

export default Controls;
