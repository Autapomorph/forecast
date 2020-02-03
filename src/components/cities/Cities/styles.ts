import styled from 'styled-components/macro';

type Props = {
  isLoading: boolean;
};

export const CitiesSection = styled.section`
  grid-area: cities;
  padding: 0 10px;
  margin-bottom: ${({ isLoading }: Props) => (isLoading ? '0' : '20px')};
`;

export const CitiesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
