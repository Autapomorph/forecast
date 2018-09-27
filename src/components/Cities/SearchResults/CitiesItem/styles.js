import styled from 'styled-components';

export const StyledCitiesItemWrapper = styled.div`
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

export const StyledCitiesItemHeader = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  font-weight: bold;
`;

export const StyledCitiesItemTitle = styled.span`
  cursor: pointer;
`;

export const StyledCitiesItemContent = styled.p`
  margin: 10px 0 0 0;
`;
