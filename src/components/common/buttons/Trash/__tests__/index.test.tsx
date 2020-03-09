import React from 'react';
import { shallow, mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TrashButton from '..';

describe('TrashButton tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<TrashButton isEmpty={false} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render FontAwesomeIcon if not empty', () => {
    const wrapper = mount(<TrashButton isEmpty={false} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });

  it('should not render FontAwesomeIcon if empty', () => {
    const wrapper = mount(<TrashButton isEmpty />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(0);
  });

  it('should handle clicks', () => {
    const onClick = jest.fn();
    const wrapper = mount(<TrashButton isEmpty={false} onClick={onClick} />);
    wrapper.find(FontAwesomeIcon).simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
