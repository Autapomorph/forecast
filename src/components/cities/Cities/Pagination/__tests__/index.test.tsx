import React from 'react';
import ReactPaginate from 'react-paginate';
import { shallow } from 'enzyme';

import CitiesPagination from '..';

describe('CitiesPagination tests', () => {
  const props = {
    total: 100,
    perPage: 10,
    currentPage: 1,
    onPageChange: jest.fn(),
  };

  it('renders properly', () => {
    const wrapper = shallow(<CitiesPagination {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchCity on CitiesPaginationTitle click', () => {
    const wrapper = shallow(<CitiesPagination {...props} />);
    // @ts-ignore
    wrapper.find(ReactPaginate).invoke('onPageChange')({ selected: 2 });

    expect(props.onPageChange).toBeCalledWith(2);
  });
});
