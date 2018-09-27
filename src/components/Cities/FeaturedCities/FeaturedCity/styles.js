import styled from 'styled-components';

export const StyledFeaturedCityWrapper = styled.li`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  background: var(--white);
  color: var(--contrast-text-color);
  font-weight: bold;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledFeaturedCityHeader = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  color: var(--contrast-text-color);
  font-weight: bold;
`;

export const StyledFeaturedCityTitle = styled.span`
  cursor: pointer;
`;
