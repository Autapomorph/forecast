import React from 'react';
import { shallow } from 'enzyme';

import Title from '..';

import * as S from '../styles';

describe('Title tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Title>Test</Title>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render children', () => {
    const text = 'text';
    const wrapper = shallow(<Title>{text}</Title>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(S.Title).text()).toEqual(text);
  });

  it('should render SubTitle', () => {
    const text = 'text';
    const wrapper = shallow(<Title.Subtitle>{text}</Title.Subtitle>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(S.Subtitle).text()).toEqual(text);
  });
});
