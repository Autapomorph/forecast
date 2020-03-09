import React from 'react';
import { shallow } from 'enzyme';

import CitiesList from '..';

describe('CitiesList tests', () => {
  const props = {
    cities: [
      {
        id: 0,
        name: 'name',
        region: 'region',
        countryName: 'countryName',
        countryCode: 'countryCode',
        coords: { latitude: 0, longitude: 0 },
      },
      {
        id: 1,
        name: 'name2',
        region: 'region2',
        countryName: 'countryName2',
        countryCode: 'countryCode2',
        coords: { latitude: 0, longitude: 0 },
      },
    ],
    checkIfFeatured: jest.fn(),
    fetchCity: jest.fn(),
    addToFeatured: jest.fn(),
    removeFromFeatured: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders properly', () => {
    const wrapper = shallow(<CitiesList {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render CitiesItem', () => {
    const wrapper = shallow(<CitiesList {...props} />);
    const items = wrapper.find('CitiesItem');

    expect(items).toHaveLength(2);
    expect(items.at(0).key()).toBe('0');
    expect(items.at(0).prop('city')).toBe(props.cities[0]);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call checkIfFeatured', () => {
    shallow(<CitiesList {...props} />);

    expect(props.checkIfFeatured).toBeCalledTimes(2);
    expect(props.checkIfFeatured).toHaveBeenNthCalledWith(1, 0);
    expect(props.checkIfFeatured).toHaveBeenNthCalledWith(2, 1);
  });
});
