import styled, { css } from 'styled-components';

export const StyledMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  border-radius: 5px;

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
