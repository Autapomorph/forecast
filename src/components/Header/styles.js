import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  grid-area: header;
  min-width: 320px;
  padding-top: 30px;

  @media screen and (min-width: 340px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (min-width: 500px) {
    justify-content: flex-start;
    padding-left: 35px;
    padding-right: 35px;
  }
`;
