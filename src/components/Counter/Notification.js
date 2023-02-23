import React from 'react';
import './Counter.css';

const Notification = ({ message }) => {

    return  <div className='text'>
                <p>{message}</p>
            </div>
}

export default Notification;