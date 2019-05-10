import React, { Fragment } from 'react';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledRetryButton } from './styles';

interface IProps extends Partial<FontAwesomeIconProps> {
  onClick: (event: React.MouseEvent) => void;
}

const RetryButton: React.FC<IProps> = ({ onClick, ...props }): React.ReactElement => (
  <Fragment>
    {
      // @ts-ignore
      <StyledRetryButton icon={faRedoAlt} onClick={onClick} {...props} />
    }
  </Fragment>
);

export default RetryButton;
