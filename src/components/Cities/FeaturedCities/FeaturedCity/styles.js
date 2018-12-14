import styled from 'styled-components';

import ReorderButton from '../../../common/buttons/ReorderButton';
import FeaturedButton from '../../../common/buttons/FeaturedButton';

export const StyledFeaturedCityWrapper = styled.li`
  display: flex;
  align-items: center;
  min-height: 50px;
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

export const StyledFeaturedCityTitle = styled.span`
  flex-grow: 1;
  padding: 15px 0;
  cursor: pointer;
`;

export const StyledFeaturedCityReorderButton = styled(ReorderButton)`
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  padding-left: 10px;
  padding-right: 8px;
`;

export const StyledFeaturedButton = styled(FeaturedButton)`
  flex-shrink: 0;
  padding-left: 8px;
  padding-right: 10px;
`;
