import styled, { css } from 'styled-components';

export const StyledGeoIconButton = styled.button.attrs({
  type: 'button',
})`
  display: none;
  flex-shrink: 0;
  padding: 5px 10px;
  border: 1px solid var(--light-gray);
  border-left: 1px solid var(--gray);
  border-radius: 0 5px 5px 0;
  background: var(--light-gray);
  color: var(--contrast-text-color);
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background: var(--gray);
    border: 1px solid var(--gray);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--light-gray);
      color: var(--disabled-text-color);
      border: 1px solid var(--light-gray);
      cursor: default;

      &:hover {
        background: var(--light-gray);
        color: var(--disabled-text-color);
        border: 1px solid var(--light-gray);
      }
    `};

  @media screen and (min-width: 600px) {
    display: inline-block;
  }
`;

export const StyledGeoButton = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  background: var(--white);
  color: var(--contrast-text-color);
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    background: var(--light-gray);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--light-gray);
      color: var(--disabled-text-color);
      cursor: default;

      &:hover {
        color: var(--disabled-text-color);
      }
    `};

  @media screen and (min-width: 600px) {
    display: none;
  }
`;
