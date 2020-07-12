/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../styles/components/Interest.scss';

function Interest({ interest = [] }) {
  return (
    <div className='Interest'>
      <h1 className='Interest-title'>Interest</h1>
      <ul className='Interest-list'>
        {
          interest.map((interestItem, idx) => <li key={`interest-item-${idx}`} className='Interest-item'>{interestItem}</li>)
        }
      </ul>
    </div>
  );
}

export default Interest;
