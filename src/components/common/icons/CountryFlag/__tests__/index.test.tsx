import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CountryFlag from '..';

describe('CountryFlag tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<CountryFlag country="ru" />);

    expect(wrapper).toMatchSnapshot();
  });

  xit('should render country as background-image', () => {
    const wrapper = shallow(<CountryFlag country="ru" />);

    expect(wrapper).toMatchSnapshot();
    // @ts-ignore
    expect(toJson(wrapper)).toHaveStyleRule('background-image', expect.stringContaining('ru'));
  });
});
