import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, feedbackFuncClick }) {
  return options.map((option, index) => (
    <button
      type="button"
      className={css.btn}
      key={index}
      onClick={() => feedbackFuncClick(option)}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  feedbackFuncClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
