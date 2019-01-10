import styled from 'styled-components';

export const StyledCitiesItemWrapper = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  background: var(--white);
  color: var(--contrast-text-color);
  font-weight: bold;

  :last-child {
    margin-bottom: 0;
  }
`;

export const StyledCitiesItemTitle = styled.span`
  cursor: pointer;
`;

export const StyledTitleButtonsWrapper = styled.div`
  flex-shrink: 0;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

export const StyledCitiesItemHeader = styled.h4`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-weight: bold;

  ${StyledCitiesItemTitle} {
    flex-grow: 1;
  }
`;

export const StyledCitiesItemContent = styled.p`
  margin: 10px 0 0 0;
`;
