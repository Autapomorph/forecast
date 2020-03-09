import React from 'react';
import { shallow } from 'enzyme';

import { UnitsFormats } from '..';

describe('UnitsFormats tests', () => {
  const unitsFormats = ['format1', 'format2'];
  const props = {
    availableUnitsFormats: unitsFormats,
    selectedUnitsFormat: unitsFormats[0],
    _changeUnitsFormat: jest.fn(),
  };

  it('renders properly', () => {
    const wrapper = shallow(<UnitsFormats {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
