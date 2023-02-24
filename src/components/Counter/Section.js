import React from 'react';
import './Counter.css';

const Section = ( props ) => {

  return  <div className='section'>
              <p className='title'>{props.title}</p>
              {props.children}
          </div>
}

export default Section;