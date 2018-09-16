import { IPAPI_API } from '../../config/geolocation';

export default class GeolocationService {
  static getGeoPermissionState() {
    return new Promise((resolve, reject) => {
      if (navigator.permissions) {
        navigator.permissions
          .query({ name: 'geolocation' })
          .then(permission => resolve(permission.state));
      } else {
        reject(new Error('Permission API is not supported'));
      }
    });
  }

  static fetchGeolocationWithPermission = async () => {
    try {
      const geoPermissionState = await GeolocationService.getGeoPermissionState();

      if (geoPermissionState === 'denied') {
        return GeolocationService.fetchGeolocationByIP();
      }

      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    } catch (e) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    }
  };

  static fetchGeolocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  static fetchGeolocationByIP = async () => {
    const response = await fetch(IPAPI_API);

    if (!response.ok) {
      throw new Error('GeoIP fetching failed');
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
