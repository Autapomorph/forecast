import React from 'react';
import { shallow } from 'enzyme';

import Loader from '..';

import * as S from '../styles';

describe('Loader tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Loader>Test</Loader>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render children', () => {
    const text = 'text';
    const wrapper = shallow(<Loader>{text}</Loader>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(S.LoaderMessage).text()).toEqual(text);
  });

  it('should render default children', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(Loader.defaultProps.children));
  });
});
