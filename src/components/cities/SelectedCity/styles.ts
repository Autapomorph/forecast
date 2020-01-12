import styled from 'styled-components/macro';

type SelectedCitySectionProps = {
  isLoading?: boolean;
};

export const StyledSelectedCitySection = styled.section`
  grid-area: cities;
  padding: 0 10px;
  margin-bottom: ${({ isLoading }: SelectedCitySectionProps) => (isLoading ? '0' : '20px')};
`;
