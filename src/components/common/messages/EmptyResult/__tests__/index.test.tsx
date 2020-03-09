import React from 'react';
import { shallow } from 'enzyme';

import EmptyResult from '..';

import * as S from '../styles';

describe('EmptyResult tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<EmptyResult>Test</EmptyResult>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render children', () => {
    const text = 'text';
    const wrapper = shallow(<EmptyResult>{text}</EmptyResult>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(S.EmptyResultMessage).text()).toEqual(text);
  });
});
