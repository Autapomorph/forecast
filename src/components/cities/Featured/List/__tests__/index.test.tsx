import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { mount, ReactWrapper } from 'enzyme';

import FeaturedList from '..';

describe('FeaturedList tests', () => {
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
    fetchCity: jest.fn(),
    removeFromFeatured: jest.fn(),
  };

  const setup = (): ReactWrapper =>
    mount(
      <DragDropContext onDragEnd={jest.fn()}>
        <FeaturedList {...props} />
      </DragDropContext>,
    );

  it('renders properly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render FeaturedItem', () => {
    const wrapper = setup();
    const items = wrapper.find('FeaturedItem');

    expect(items).toHaveLength(2);
    expect(items.at(0).key()).toBe('0');
    expect(items.at(0).prop('city')).toBe(props.cities[0]);

    expect(wrapper).toMatchSnapshot();
  });
});
