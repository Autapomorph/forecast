import styled from 'styled-components/macro';

interface IWeatherIconProps {
  size: string;
}

// eslint-disable-next-line import/prefer-default-export
export const StyledWeatherIcon = styled.i`
  font-size: ${({ size }: IWeatherIconProps) => size};
  vertical-align: middle;
`;
