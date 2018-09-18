import styled from 'styled-components';

import Error from '../common/Error';

import { StyledGeoButton } from './GeoButton/styles';

export const StyledGeolocationSection = styled.section`
  grid-area: geolocation;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  padding: 0 10px;
`;

export const StyledGeoError = styled(Error)`
  display: none;
  position: relative;
  height: 32px;
  padding: 5px;
  padding-left: 15px;
  margin-top: 10px;
  border: 1px solid var(--border-error);
  border-radius: 0 5px 5px 0;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    top: 4px;
    left: -12px;
    background: var(--bg-error);
    transform: rotate(-45deg);
    border-top: 1px solid var(--border-error);
    border-left: 1px solid var(--border-error);
    z-index: 1;
  }

  ${StyledGeoButton}:hover ~ & {
    display: block;
  }
`;
