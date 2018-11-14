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
  line-height: 1.2;
  outline: none;

  ::selection {
    background: var(--bg-violet);
    color: var(--base-text-color);
  }
`;

export const StyledInputButtonsBlock = styled.div`
  display: flex;
  flex-direction: row;

  > :last-child {
    border: 0;
    border-radius: 0 5px 5px 0;
  }
`;

export const StyledInputButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 5px 10px;
  border: 0;
  border-right: 1px solid var(--gray);
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

export const StyledSearchButton = styled(StyledInputButton).attrs({
  type: 'submit',
});
