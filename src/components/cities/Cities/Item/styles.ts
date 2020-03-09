import styled from 'styled-components/macro';

import { ThemeProp } from 'models';

export const CitiesItemWrapper = styled.li`
  display: flex;
  min-height: 50px;
  margin-bottom: 15px;
  border: 1px solid ${({ theme }: ThemeProp) => theme.borderColor};
  border-radius: 5px;
  background: ${({ theme }: ThemeProp) => theme.elementBg};
  color: ${({ theme }: ThemeProp) => theme.altTextColor};
  font-weight: bold;

  :last-child {
    margin-bottom: 0;
  }
`;

export const CitiesItemTitle = styled.span`
  align-self: center;
  flex-grow: 1;
  padding: 15px 0;
  padding-left: 10px;
  cursor: pointer;
`;

export const TitleButtonsWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  padding-left: 10px;
  padding-right: 5px;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;
