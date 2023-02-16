import React from 'react';
import icon from './icon.svg';
import './Counter.css';

interface Props{
  countAll: number;
  countToday: number;
}

/**
 * Displays the total API request count and the daily request count.
 *
 * @param {Props} {countAll, countToday}
 * @returns {HTMLDivElement}
 */

function Counter({countAll, countToday}: Props) {
  return (
    <div className="c-counter">
      <h2 className="u-title c-counter__title">API Requests</h2>
      <div className='c-counter__item'>
        <img src={icon.toString()} className="u-icon" alt="icon" />
        <span className="u-accent-large">{countAll}</span>
      </div>
      <div className='c-counter__items'>
        <div className='c-counter__item'>
          <img src={icon.toString()} className="u-icon" alt="icon" />
          <span>{countToday}</span>
        </div>

        <div className='c-counter__item'>
          Today
        </div>
      </div>
    </div>
  );
}

export default Counter;
