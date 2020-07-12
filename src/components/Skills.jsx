/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../styles/components/Skills.scss';

function Skills({ skills = [] }) {
  return (
    <div className='Skills'>
      <h1 className='Skills-title'>Skills</h1>
      <ul className='Skills-list'>
        {
          skills.map(({ name, percentage }, idx) => (
            <li key={`skills-item-${idx}`} className='Skills-item'>
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

export default Skills;
