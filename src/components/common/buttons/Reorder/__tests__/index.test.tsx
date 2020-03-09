import React from 'react';
import { shallow, mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ReorderButton from '..';

describe('ReorderButton tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<ReorderButton isDragging />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render FontAwesomeIcon', () => {
    const wrapper = mount(<ReorderButton isDragging />);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });
});
