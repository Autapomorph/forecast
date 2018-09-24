import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledGeolocationSection = styled.section`
  grid-area: geolocation;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: start;
  }
`;
