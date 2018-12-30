import styled from 'styled-components';

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
