import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ clickGood, clickNeutral, clickBad }) => {

    return <div>
            <button className={css.btn} type='button' onClick={clickGood}>
              Good
            </button>
            <button className={css.btn} onClick={clickNeutral}>
              Neutral
            </button>
            <button className={css.btn} onClick={clickBad}>
              Bad
            </button>
          </div>
}

FeedbackOptions.propTypes = {
  clickGood: PropTypes.func,
  clickNeutral: PropTypes.func,
  clickBad: PropTypes.func,
}; 

export default FeedbackOptions;
