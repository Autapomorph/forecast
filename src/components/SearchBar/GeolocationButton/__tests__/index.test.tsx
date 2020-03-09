import React from 'react';
import { shallow, mount } from 'enzyme';

import checkGeolocationPermission from 'utils/geolocation/checkPermission';

import * as S from 'components/SearchBar/styles';

import { GeolocationButton } from '..';

jest.mock('utils/geolocation/checkPermission');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: jest.fn(v => v) }),
}));

describe('GeolocationButton tests', () => {
  const fetchGeolocation = jest.fn();
  const fetchGeolocationByIP = jest.fn();
  const onClick = jest.fn();
  const props = {
    isLoading: false,
    errorMessage: null,
    onClick,
    _fetchGeolocation: fetchGeolocation,
    _fetchGeolocationByIP: fetchGeolocationByIP,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders properly', () => {
    const wrapper = shallow(<GeolocationButton {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call _fetchGeolocation & onClick', () => {
    const wrapper = shallow(<GeolocationButton {...props} />);
    wrapper.find(S.InputButton).simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(fetchGeolocation).toHaveBeenCalledTimes(1);
  });

  it('should call checkGeolocationPermission and fetchGeolocation', async () => {
    (checkGeolocationPermission as jest.Mock).mockResolvedValue(undefined);

    await mount(<GeolocationButton {...props} />);

    await expect(checkGeolocationPermission).toHaveBeenCalledTimes(1);
    await expect(fetchGeolocation).toHaveBeenCalledTimes(1);
    await expect(fetchGeolocationByIP).toHaveBeenCalledTimes(0);
  });

  it('should call checkGeolocationPermission and fetchGeolocationByIp', async () => {
    (checkGeolocationPermission as jest.Mock).mockRejectedValue(new Error());

    await mount(<GeolocationButton {...props} />);

    await expect(checkGeolocationPermission).toHaveBeenCalledTimes(1);
    await expect(fetchGeolocationByIP).toHaveBeenCalledTimes(1);
    await expect(fetchGeolocation).toHaveBeenCalledTimes(0);
  });
});
