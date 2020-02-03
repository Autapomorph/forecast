import styled from 'styled-components/macro';

type Props = {
  isLoading?: boolean;
};

export const CitySection = styled.section`
  grid-area: cities;
  padding: 0 10px;
  margin-bottom: ${({ isLoading }: Props) => (isLoading ? '0' : '20px')};
`;
