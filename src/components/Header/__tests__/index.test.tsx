import React from 'react';
import { shallow } from 'enzyme';

import Header from '..';

describe('Header tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
