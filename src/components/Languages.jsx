/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../styles/components/Languages.scss';

function Languages({ languages = [] }) {
  return (
    <div className='Languages'>
      <h1 className='Languages-title'>Languages</h1>
      <ul className='Languages-list'>
        {
          languages.map(({ name, percentage }, idx) => (
            <li key={`language-item-${idx}`} className='Languages-item'>
              {name}
              {': '}
              {percentage}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Languages;
