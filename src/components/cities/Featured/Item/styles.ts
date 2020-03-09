import styled from 'styled-components/macro';

import { ThemeProp } from 'models';
import ReorderButton from 'components/common/buttons/Reorder';
import CFeaturedButton from 'components/common/buttons/Featured';

export const FeaturedItemWrapper = styled.li`
  display: flex;
  min-height: 50px;
  margin-bottom: 15px;
  border: 1px solid ${({ theme }: ThemeProp) => theme.borderColor};
  border-radius: 5px;
  background: ${({ theme }: ThemeProp) => theme.elementBg};
  color: ${({ theme }: ThemeProp) => theme.altTextColor};
  font-weight: bold;
`;

export const FeaturedItemTitle = styled.span`
  align-self: center;
  flex-grow: 1;
  padding: 15px 0;
  cursor: pointer;
`;

export const FeaturedItemReorderButton = styled(ReorderButton)`
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  padding-left: 10px;
  padding-right: 8px;
`;

export const FeaturedButton = styled(CFeaturedButton)`
  flex-shrink: 0;
  padding-left: 10px;
  padding-right: 10px;
`;
