import React from 'react';
import { shallow } from 'enzyme';

import GeolocationButton from 'components/SearchBar/GeolocationButton';
import { SearchBar } from '..';

import * as S from '../styles';

describe('SearchBar tests', () => {
  const fetchCititesByName = jest.fn();
  const props = {
    _fetchCititesByName: fetchCititesByName,
  };

  it('renders properly', () => {
    const wrapper = shallow(<SearchBar {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call _fetchCititesByName', () => {
    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find(S.SearchInput).invoke('onChange')({
      target: { value: 'cityName' },
    });
    wrapper.find(S.SearchForm).invoke('onSubmit')({ preventDefault: jest.fn() });

    expect(fetchCititesByName).toHaveBeenCalledWith('cityName');
  });

  it('should clear input on ClearButton click', () => {
    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find(S.SearchInput).invoke('onChange')({
      target: { value: 'cityName' },
    });
    wrapper.find(S.ClearButton).invoke('onClick')();

    expect(wrapper.find(S.SearchInput).prop('value')).toBe('');
  });

  it('should clear input on GeolocationButton click', () => {
    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find(S.SearchInput).invoke('onChange')({
      target: { value: 'cityName' },
    });
    wrapper.find(GeolocationButton).simulate('click');

    expect(wrapper.find(S.SearchInput).prop('value')).toBe('');
  });

  it('should change SearchButton disabled attr', () => {
    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find(S.SearchInput).invoke('onChange')({
      target: { value: 'cityName' },
    });

    expect(wrapper.find(S.SearchButton).prop('disabled')).toBe(false);
  });

  it('should change ClearButton disabled attr', () => {
    const wrapper = shallow(<SearchBar {...props} />);
    wrapper.find(S.SearchInput).invoke('onChange')({
      target: { value: 'cityName' },
    });

    expect(wrapper.find(S.ClearButton).prop('disabled')).toBe(false);
  });
});
