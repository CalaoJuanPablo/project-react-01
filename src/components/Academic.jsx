import React from 'react';
import '../styles/components/Academic.scss';

function AcademicItem({ degree, description, institution, startDate, endDate }) {
  return (
    <div className='Academic-item'>
      <h3 className='Academic-degree'>
        {degree}
        {' '}
        |
        {' '}
        {institution}
      </h3>
      <p className='Academic-dates'>
        {startDate}
        {' '}
        |
        {' '}
        {endDate}
      </p>
      <p className='Academic-description'>{description}</p>
    </div>
  );
}

function Academic({ academic = [] }) {
  return (
    <div className='Academic'>
      <h1 className='Academic-title'>Academic</h1>
      <div className='Academic-grid'>
        {
          // eslint-disable-next-line react/no-array-index-key
          academic.map((academicItem, idx) => <AcademicItem key={`academic-item-${idx}`} {...academicItem} />)
        }
      </div>
    </div>
  );
}

export default Academic;
