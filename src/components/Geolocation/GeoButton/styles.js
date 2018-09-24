import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledGeoButton = styled.button.attrs({
  type: 'submit',
})`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  background: var(--white);
  color: var(--contrast-text-color);
  font-size: 1.5rem;
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
    max-width: 270px;
  }
`;
