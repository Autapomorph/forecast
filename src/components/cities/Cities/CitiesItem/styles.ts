import styled from 'styled-components/macro';

export const CitiesItemWrapper = styled.li`
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

export const CitiesItemTitle = styled.span`
  cursor: pointer;
`;

export const TitleButtonsWrapper = styled.div`
  flex-shrink: 0;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

export const CitiesItemHeader = styled.h4`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-weight: bold;

  ${CitiesItemTitle} {
    flex-grow: 1;
  }
`;

export const CitiesItemContent = styled.p`
  margin: 10px 0 0 0;
`;
