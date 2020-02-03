import styled from 'styled-components/macro';
import 'weathericons/css/weather-icons.css';
import 'weathericons/css/weather-icons-wind.css';

type Props = {
  size: string;
};

export const WeatherIcon = styled.i`
  font-size: ${({ size }: Props) => size};
  vertical-align: text-bottom;
`;
