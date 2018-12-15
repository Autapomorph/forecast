import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledCountryFlag = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  vertical-align: middle;
  font-size: ${({ size }) => size};
  background-image: ${({ country }) => `url(/images/countries/flags/1x1/${country}.svg)`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
