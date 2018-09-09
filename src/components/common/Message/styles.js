import styled, { css } from 'styled-components';

export const StyledMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  ${props =>
    props.error &&
    css`
      background: var(--bg-error);
      color: var(--error-text-color);
    `};
`;

export const StyledMessageContent = styled.span`
  text-align: center;
  font-size: 1.5rem;
`;
