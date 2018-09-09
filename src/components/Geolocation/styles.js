import styled from 'styled-components';

import Error from '../common/Error';

import { StyledGeoButton } from './GeoButton/styles';

export const StyledGeolocation = styled.section`
  grid-area: geolocation;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;

  @media screen and (min-width: 500px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const StyledGeoError = styled(Error)`
  display: none;
  position: relative;
  height: 32px;
  padding: 5px;
  margin-left: 20px;
  border-radius: 0 5px 5px 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -16px;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-right: 16px solid var(--bg-error);
  }

  ${StyledGeoButton}:hover ~ & {
    display: block;
  }
`;
