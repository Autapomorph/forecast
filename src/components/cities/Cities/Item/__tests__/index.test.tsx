import React from 'react';
import { shallow } from 'enzyme';

import CitiesItem from '..';

import * as S from '../styles';

describe('CitiesItem tests', () => {
  const props = {
    city: {
      id: 0,
      name: 'name',
      region: 'region',
      countryName: 'countryName',
      countryCode: 'countryCode',
      coords: { latitude: 0, longitude: 0 },
    },
    isFeatured: false,
    fetchCity: jest.fn(),
    addToFeatured: jest.fn(),
    removeFromFeatured: jest.fn(),
  };

  it('renders properly', () => {
    const wrapper = shallow(<CitiesItem {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchCity on CitiesItemTitle click', () => {
    const wrapper = shallow(<CitiesItem {...props} />);
    wrapper.find(S.CitiesItemTitle).invoke('onClick')();

    expect(props.fetchCity).toBeCalledWith(props.city.coords);
  });

  it('should call addToFeatured on FeaturedButton onAdd callback', () => {
    const wrapper = shallow(<CitiesItem {...props} />);
    // @ts-ignore
    wrapper.find('FeaturedButton').invoke('onAdd')();

    const {
      city: { id, name, region, countryName, countryCode, coords },
    } = props;
    expect(props.addToFeatured).toBeCalledWith({
      id,
      name,
      region,
      countryName,
      countryCode,
      coords,
    });
  });

  it('should call removeFromFeatured on FeaturedButton onRemove callback', () => {
    const wrapper = shallow(<CitiesItem {...props} />);
    // @ts-ignore
    wrapper.find('FeaturedButton').invoke('onRemove')();

    expect(props.removeFromFeatured).toBeCalledWith(props.city.id);
  });
});
