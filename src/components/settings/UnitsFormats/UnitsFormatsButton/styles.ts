import styled, { css } from 'styled-components/macro';

type Props = {
  checked: boolean;
};

export const SwitchButton = styled.span`
  flex: 1 1 0;
  border: 1px solid var(--light-gray);
  background: var(--white);
  color: var(--contrast-text-color);
  line-height: 1.2;
  transition: all 0.2s ease;
  cursor: pointer;

  :hover {
    border-color: var(--gray);
    background: var(--light-gray);
  }

  :first-of-type {
    border-radius: 5px 0 0 5px;
  }

  :not(:first-of-type) {
    margin-left: -1px;
  }

  :last-of-type {
    border-radius: 0 5px 5px 0;
  }

  :only-of-type {
    border-radius: 5px;
  }

  ${({ checked }: Props) =>
    checked &&
    css`
      color: var(--bg-violet);
      font-weight: bold;

      :hover {
        border-color: var(--light-gray);
        background: var(--white);
      }
    `}
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  cursor: pointer;
`;

export const LabelText = styled.span`
  overflow: hidden;
`;

export const RadioButton = styled.input.attrs({
  type: 'radio',
})`
  display: none;
`;
