import styled from 'styled-components';

import { StyledTitle } from '~/components/common/Title/styles';

export const StyledCityHeader = styled.div`
  grid-area: city-title;
  display: flex;

  ${StyledTitle} {
    flex-grow: 1;
  }
`;

export const StyledTitleButtonsWrapper = styled.div`
  flex-shrink: 0;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;
