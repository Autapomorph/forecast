import React from 'react';
import { shallow, mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CloseButton from '..';

describe('CloseButton tests', () => {
  let onClick = jest.fn();

  beforeEach(() => {
    onClick = jest.fn();
  });

  it('renders properly', () => {
    const wrapper = shallow(<CloseButton onClick={onClick} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render FontAwesomeIcon', () => {
    const wrapper = mount(<CloseButton onClick={onClick} />);

    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });

  it('should handle clicks', () => {
    const wrapper = mount(<CloseButton onClick={onClick} />);
    wrapper.find(FontAwesomeIcon).simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
