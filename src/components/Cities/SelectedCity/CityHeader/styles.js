import styled from 'styled-components';

export const StyledCityHeader = styled.div`
  grid-area: city-title;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitleButtonsWrapper = styled.div`
  > :not(:last-child) {
    margin-right: 10px;
  }
`;
