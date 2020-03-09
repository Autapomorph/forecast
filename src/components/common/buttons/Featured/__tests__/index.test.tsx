import React from 'react';
import { shallow, mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

import FeaturedButton from '..';

describe('FeaturedButton tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<FeaturedButton isFeatured={false} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render FontAwesomeIcon', () => {
    const wrapper = mount(<FeaturedButton isFeatured={false} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });

  it('should render faStarRegular', () => {
    const wrapper = mount(<FeaturedButton isFeatured={false} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faStarRegular);
  });

  it('should render faStarSolid', () => {
    const wrapper = mount(<FeaturedButton isFeatured />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faStarSolid);
  });

  it('should handle clicks', () => {
    const onAdd = jest.fn();
    const onRemove = jest.fn();

    let wrapper = mount(<FeaturedButton isFeatured={false} onAdd={onAdd} onRemove={onRemove} />);
    wrapper.find(FontAwesomeIcon).simulate('click');
    expect(onAdd).toHaveBeenCalled();

    wrapper = mount(<FeaturedButton isFeatured onAdd={onAdd} onRemove={onRemove} />);
    wrapper.find(FontAwesomeIcon).simulate('click');
    expect(onRemove).toHaveBeenCalled();
  });
});
