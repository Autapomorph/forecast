import styled from 'styled-components/macro';

import ReorderButton from 'components/common/buttons/ReorderButton';
import CFeaturedButton from 'components/common/buttons/FeaturedButton';

export const FeaturedItemWrapper = styled.li`
  display: flex;
  align-items: center;
  min-height: 50px;
  margin-bottom: 15px;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  background: var(--white);
  color: var(--contrast-text-color);
  font-weight: bold;
`;

export const FeaturedItemTitle = styled.span`
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
  padding-left: 8px;
  padding-right: 10px;
`;
