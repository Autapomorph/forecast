import React from 'react';
import { mount } from 'enzyme';

import { SearchBar } from '..';

import * as S from '../styles';

jest.mock('components/SearchBar/GeolocationButton', () => () => null);

describe('SearchBar tests', () => {
  const fetchCititesByName = jest.fn();
  const props = {
    _fetchCititesByName: fetchCititesByName,
  };

  it('renders properly', () => {
    const wrapper = mount(<SearchBar {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should focus input after ClearButton click', () => {
    const wrapper = mount(<SearchBar {...props} />);
    wrapper.find(S.SearchInput).invoke('onChange')({
      target: { value: 'cityName' },
    });
    wrapper.find(S.ClearButton).invoke('onClick')();

    expect(wrapper.find('input').is(':focus')).toBeTruthy();
  });

  it('should blur input after submit', () => {
    const wrapper = mount(<SearchBar {...props} />);
    wrapper.find(S.SearchInput).invoke('onChange')({
      target: { value: 'cityName' },
    });
    wrapper.find(S.ClearButton).invoke('onClick')();
    wrapper.find(S.SearchForm).invoke('onSubmit')({ preventDefault: jest.fn() });

    expect(wrapper.find('input').is(':focus')).toBeFalsy();
  });
});
