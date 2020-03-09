import React from 'react';
import { shallow } from 'enzyme';

import { Languages } from '..';

describe('Languages tests', () => {
  const languages = [
    {
      title: 'title',
      code: 'code',
    },
    {
      title: 'title2',
      code: 'code2',
    },
  ];
  const props = {
    availableLanguages: languages,
    selectedLanguage: languages[0],
    _changeLanguage: jest.fn(),
  };

  it('renders properly', () => {
    const wrapper = shallow(<Languages {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
