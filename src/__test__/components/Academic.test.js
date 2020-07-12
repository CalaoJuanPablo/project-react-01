import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';

const academicData = [
  {
    degree: 'Atomic Master',
    description: ' I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
    endDate: 'Jan 2017',
    institution: 'MIT',
    startDate: 'Jan 2018',
  },
  {
    degree: 'Atomic Master',
    description: ' I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
    endDate: 'Jan 2017',
    institution: 'MIT',
    startDate: 'Jan 2018',
  },
  {
    degree: 'Atomic Master',
    description: ' I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
    endDate: 'Jan 2017',
    institution: 'MIT',
    startDate: 'Jan 2018',
  },
];

describe('<Academic />', () => {
  const academic = mount(<Academic academic={academicData} />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(2);
  });

});
