/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../styles/components/Experience.scss';

function ExperienceItem({ jobTitle, company, jobDescription, startDate, endDate }) {
  return (
    <div className='Experience-item'>
      <h3 className='Experience-job-title'>
        {jobTitle}
        {' '}
        |
        {' '}
        {company}
      </h3>
      <p className='Experience-dates'>
        {startDate}
        {' '}
        |
        {' '}
        {endDate}
      </p>
      <p className='Experience-job-description'>{jobDescription}</p>
    </div>
  );
}

function Experience({ experienceItems = [] }) {
  return (
    <div className='Experience'>
      <h1 className='Experience-title'>Experience</h1>
      <div className='Experience-grid'>
        {experienceItems.map((experienceItem, idx) => <ExperienceItem key={`experience-item-${idx}`} {...experienceItem} />)}
      </div>
    </div>
  );
}

export default Experience;
