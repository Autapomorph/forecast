import styled from 'styled-components';

export const StyledFeaturedList = styled.ul`
  padding: 0;
  margin: 12px 0 0;
  list-style: none;
`;

export const StyledFeaturedListItem = styled.li`
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
