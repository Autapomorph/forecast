import generateWeatherIcon from '../generateWeatherIcon';

describe('Generate weather icon', () => {
  const icon = 'clear-day';

  it(`should return wi-forecast-io-${icon}`, () => {
    expect(generateWeatherIcon(icon)).toBe(`wi-forecast-io-${icon}`);
  });

  it('should return empty string', () => {
    expect(generateWeatherIcon()).toBe('');
  });
});
