import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledFeaturedCityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  padding: 15px 10px;
  margin: 15px 0;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
`;

export const StyledFeaturedCityTitle = styled.h4`
  color: var(--base-text-color);
  margin: 0;
  font-weight: bold;
  cursor: pointer;
`;
