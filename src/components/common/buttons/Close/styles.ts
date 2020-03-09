import styled from 'styled-components/macro';

import { ThemeProp } from 'models';
import BaseIconButton from 'components/common/buttons/Base';

export const CloseButton = styled(BaseIconButton)`
  padding: 5px 10px;
  color: ${({ theme }: ThemeProp) => theme.baseTextColor};
  font-size: 1.2rem;

  :hover {
    color: var(--gray-light-lighter);
  }
`;
