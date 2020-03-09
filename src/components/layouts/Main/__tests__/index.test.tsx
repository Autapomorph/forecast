import React from 'react';
import { shallow } from 'enzyme';

import MainLayout from '..';

describe('MainLayout tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<MainLayout />);

    expect(wrapper).toMatchSnapshot();
  });
});
