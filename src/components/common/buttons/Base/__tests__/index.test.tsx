import React from 'react';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BaseIconButton from '..';

describe('BaseIconButton tests', () => {
  it('renders properly', () => {
    // @ts-ignore
    const wrapper = shallow(<BaseIconButton icon="ufo" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render FontAwesomeIcon', () => {
    const wrapper = shallow(<BaseIconButton icon="ufo" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
    expect(wrapper.find(FontAwesomeIcon).prop('icon')).toBe('ufo');
  });

  it('should handle clicks', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<BaseIconButton icon="ufo" onClick={onClick} />);
    wrapper.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
