import styled from 'styled-components/macro';

type WeatherIconProps = {
  size: string;
};

export const StyledWeatherIcon = styled.i`
  font-size: ${({ size }: WeatherIconProps) => size};
  vertical-align: middle;
`;
