import checkPermission from '../checkPermission';

const setQuery = (query: () => void): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).navigator.permissions = {
    query,
  };
};

describe('check geolocation permission', () => {
  it('should handle Permissions API unavailable', async () => {
    await expect(checkPermission()).rejects.toThrow();
  });

  it('should handle invalid permission name', async () => {
    setQuery(jest.fn(() => Promise.reject(new Error('Invalid PermissionName'))));
    await expect(checkPermission()).rejects.toThrow();
  });

  it('should handle geolocation is granted', async () => {
    setQuery(jest.fn(() => Promise.resolve({ state: 'granted' })));
    await expect(checkPermission()).resolves.toBe('granted');
  });

  it('should handle geolocation is denied', async () => {
    setQuery(jest.fn(() => Promise.resolve({ state: 'denied' })));
    await expect(checkPermission()).rejects.toBe('denied');
  });

  it('should handle geolocation is prompt', async () => {
    setQuery(jest.fn(() => Promise.resolve({ state: 'prompt' })));
    await expect(checkPermission()).rejects.toBe('prompt');
  });
});
