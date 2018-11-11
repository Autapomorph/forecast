import styled, { css } from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  width: 100%;
  padding: 0 10px;
`;

export const StyledSearchInput = styled.input.attrs({
  type: 'text',
})`
  flex-grow: 1;
  background: var(--white);
  padding: 10px;
  border: 1px solid var(--light-gray);
  border-right: 0;
  border-radius: 5px 0 0 5px;
  font-size: 1.3rem;
  line-height: 1.2em;
  outline: none;

  ::selection {
    background: var(--bg-violet);
    color: var(--base-text-color);
  }
`;

export const StyledSearchButton = styled.button.attrs({
  type: 'submit',
})`
  flex-shrink: 0;
  padding: 5px 10px;
  border: 0;
  background: var(--light-gray);
  color: var(--contrast-text-color);
  font-size: 1.5rem;
  cursor: pointer;

  :hover {
    background: var(--gray);
  }

  ${/* sc-dec */ ({ disabled }) =>
    disabled &&
    css`
      background: var(--light-gray);
      color: var(--disabled-text-color);
      cursor: default;

      :hover {
        background: var(--light-gray);
        color: var(--disabled-text-color);
      }
    `}
`;
