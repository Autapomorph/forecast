import styled from 'styled-components/macro';

type SearchResultsSectionProps = {
  isLoading: boolean;
};

export const StyledSearchResultsSection = styled.section`
  grid-area: cities;
  padding: 0 10px;
  margin-bottom: ${({ isLoading }: SearchResultsSectionProps) => (isLoading ? '0' : '20px')};
`;

export const StyledSearchResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
