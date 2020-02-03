import React from 'react';
import { shallow } from 'enzyme';

import Message from '.';

import * as S from './styles';

describe('Message tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Message>Test</Message>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render children', () => {
    const text = 'text';
    const wrapper = shallow(<Message>{text}</Message>);

    expect(wrapper.find(S.MessageContent).text()).toEqual(text);
  });
});
