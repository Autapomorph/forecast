import styled from 'styled-components/macro';

type Props = {
  country: string;
  size: string;
};

export const CountryFlag = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  vertical-align: sub;
  font-size: ${({ size }: Props) => size};
  background-image: ${({ country }: Props) => `url(/images/countries/flags/${country}.svg) `};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
