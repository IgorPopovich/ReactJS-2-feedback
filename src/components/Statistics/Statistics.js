import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.ul}>
      <li className={css.li}>Good: {good}</li>
      <li className={css.li}>Neutral: {neutral}</li>
      <li className={css.li}>Bad: {bad}</li>
      <li className={css.li}>Total: {total}</li>
      <li className={css.li}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
