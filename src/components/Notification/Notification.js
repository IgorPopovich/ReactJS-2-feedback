import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {

    return  <div className={css.text}>
                <p>{message}</p>
            </div>
}

Notification.propTypes = {
    message: PropTypes.string,
  }; 

export default Notification;