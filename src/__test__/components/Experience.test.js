import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';

const experienceData = [
  {
    company: 'PugStar',
    endDate: 'Present',
    jobDescription: "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
    jobTitle: 'Frontend',
    startDate: 'Jan 2020',
  },
  {
    company: 'PugStar',
    endDate: 'Present',
    jobDescription: "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
    jobTitle: 'Frontend',
    startDate: 'Jan 2020',
  },
  {
    company: 'PugStar',
    endDate: 'Present',
    jobDescription: "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
    jobTitle: 'Frontend',
    startDate: 'Jan 2020',
  },
];

describe('<Experience />', () => {
  const experience = mount(<Experience experienceItems={experienceData} />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(2);
  });

});
