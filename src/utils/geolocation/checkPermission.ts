export default function checkGeolocationPermission(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!navigator.permissions) reject(new Error('Permission API unavailable'));
    navigator.permissions
      .query({ name: 'geolocation' })
      .then(status => {
        if (status.state === 'granted') {
          resolve(status.state);
        }
        reject(status.state);
      })
      .catch(reject);
  });
}
