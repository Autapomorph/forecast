import styled from 'styled-components';

import Error from '../../common/messages/Error';

export const StyledSearchResultsSection = styled.section`
  grid-area: cities;
  padding: 0 10px;
  margin-bottom: ${({ isLoading }) => (isLoading ? '0' : '20px')};
`;

export const StyledSearchResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSearchResultsError = styled(Error)`
  margin: 10px 0;
`;
