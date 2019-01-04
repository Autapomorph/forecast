import { IPAPI_API } from '~/config/geolocation';

export default class GeolocationService {
  static fetchGeolocation = async () =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, ({ code }) => {
        switch (code) {
          case 1:
            return reject(new Error('messages.errors.geolocation.permissionDenied'));
          case 2:
            return reject(new Error('messages.errors.geolocation.positionUnavailable'));
          case 3:
            return reject(new Error('messages.errors.geolocation.timeout'));
          default:
            return reject(new Error('messages.errors.geolocation.positionUnavailable'));
        }
      });
    });

  static fetchGeolocationByIP = async () => {
    const response = await fetch(IPAPI_API);

    if (!response.ok) {
      throw new Error('messages.errors.geolocation.geoIPFetchFailed');
    }

    const geolocationData = await response.json();

    if (geolocationData.error) {
      throw new Error(geolocationData.reason);
    }

    return {
      coords: {
        latitude: geolocationData.latitude,
        longitude: geolocationData.longitude,
      },
    };
  };
}
