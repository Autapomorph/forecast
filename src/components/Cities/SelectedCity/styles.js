import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledSelectedCitySection = styled.section`
  grid-area: cities;
  padding: 0 10px;
  margin-bottom: ${({ isLoading }) => (isLoading ? '0' : '20px')};
`;
