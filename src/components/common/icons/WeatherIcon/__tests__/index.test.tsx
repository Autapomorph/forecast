import React from 'react';
import { shallow } from 'enzyme';

import WeatherIcon from '..';

import * as S from '../styles';

describe('WeatherIcon tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<WeatherIcon icon="north" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with icon class', () => {
    const wrapper = shallow(<WeatherIcon icon="north" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(S.WeatherIcon).hasClass('wi-north')).toBeTruthy();
  });

  it('should render with wind class', () => {
    const wrapper = shallow(<WeatherIcon icon="north" wind />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(S.WeatherIcon).hasClass('wi-wind')).toBeTruthy();
  });

  it('should render with fixedWidth class', () => {
    const wrapper = shallow(<WeatherIcon icon="north" fixedWidth />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(S.WeatherIcon).hasClass('wi-fw')).toBeTruthy();
  });

  it('should render with flip class', () => {
    const wrapper = shallow(<WeatherIcon icon="north" flip="horizontal" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(S.WeatherIcon).hasClass('wi-flip-horizontal')).toBeTruthy();
  });

  it('should render with rotate class', () => {
    const wrapper = shallow(<WeatherIcon icon="north" rotate={90} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(S.WeatherIcon).hasClass('wi-rotate-90')).toBeTruthy();
  });

  it('should preserve passed class', () => {
    const wrapper = shallow(<WeatherIcon icon="north" className="class" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(S.WeatherIcon).hasClass('class')).toBeTruthy();
  });
});
