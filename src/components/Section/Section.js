import React from 'react';
import css from './Section.module.css';

const Section = ( props ) => {

  return  <div className='section'>
              <p className={css.title}>{props.title}</p>
              {props.children}
          </div>
}

export default Section;