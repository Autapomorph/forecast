import React from 'react';
import faRedoAlt from '@fortawesome/free-solid-svg-icons/faRedoAlt';

import { StyledRetryButton } from './styles';

const RetryButton = ({ onClick }) => <StyledRetryButton icon={faRedoAlt} onClick={onClick} />;

export default RetryButton;
