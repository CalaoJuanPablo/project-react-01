import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';

const languagesData = [
  {
    name: 'Spanish',
    percentage: '90%',
  },
  {
    name: 'English',
    percentage: '50%',
  },
  {
    name: 'English',
    percentage: '50%',
  },
];

describe('<Languages />', () => {
  const languages = mount(<Languages languages={languagesData} />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
  });

});
