import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { mount, ReactWrapper } from 'enzyme';

import FeaturedItem from '..';

import * as S from '../styles';

describe('FeaturedItem tests', () => {
  const props = {
    city: {
      id: 0,
      name: 'name',
      region: 'region',
      countryName: 'countryName',
      countryCode: 'countryCode',
      coords: { latitude: 0, longitude: 0 },
    },
    index: 0,
    fetchCity: jest.fn(),
    removeFromFeatured: jest.fn(),
  };

  const setup = (): ReactWrapper =>
    mount(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="featured">{() => <FeaturedItem {...props} />}</Droppable>
      </DragDropContext>,
    );

  it('renders properly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchCity on FeaturedItemTitle click', () => {
    const wrapper = setup();
    wrapper.find(S.FeaturedItemTitle).invoke('onClick')();

    expect(props.fetchCity).toBeCalledWith(props.city.coords);
  });

  it('should call removeFromFeatured on FeaturedButton onRemove callback', () => {
    const wrapper = setup();
    // @ts-ignore
    wrapper.find('FeaturedButton').invoke('onRemove')();

    expect(props.removeFromFeatured).toBeCalledWith(props.city.id);
  });
});
