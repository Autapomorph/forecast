import { IPAPI_API } from '../../config/geolocation';

export default class GeolocationService {
  static getGeoPermissionState() {
    return new Promise((resolve, reject) => {
      if (navigator.permissions) {
        navigator.permissions
          .query({ name: 'geolocation' })
          .then(permission => resolve(permission.state));
      } else {
        reject(new Error('messages.errors.permissions.APIUnavailable'));
      }
    });
  }

  static fetchGeolocation = async () => {
    const geoPermissionState = await GeolocationService.getGeoPermissionState();

    /*
      browsers do not show quick settings switcher if permission state is 'denied',
      so it might be better disable permission check and only rely on results of
      `navigator.geolocation.getCurrentPosition` method
    */
    if (geoPermissionState === 'denied') {
      throw new Error('messages.errors.geolocation.geoDenied');
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, () =>
        reject(new Error('messages.errors.geolocation.geoDenied')),
      );
    });
  };

  static fetchGeolocationByIP = async () => {
    const response = await fetch(IPAPI_API);

    if (!response.ok) {
      throw new Error('messages.errors.geolocation.geoIPFailed');
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
