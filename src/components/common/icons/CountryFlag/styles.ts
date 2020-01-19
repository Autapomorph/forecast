import styled from 'styled-components/macro';

type CountryFlagProps = {
  country: string;
  size: string;
};

export const CountryFlag = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  vertical-align: sub;
  font-size: ${({ size }: CountryFlagProps) => size};
  background-image: ${({ country }: CountryFlagProps) =>
    `url(/images/countries/flags/${country}.svg) `};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
