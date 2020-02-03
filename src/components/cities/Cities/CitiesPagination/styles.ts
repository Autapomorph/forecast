import styled, { css } from 'styled-components/macro';

type Props = {
  isSinglePage: boolean;
};

export const CitiesPagination = styled.div`
  .pagination {
    display: flex;
    justify-content: flex-end;
    list-style: none;

    ${({ isSinglePage }: Props) =>
      isSinglePage &&
      css`
        display: none;
      `}
  }

  .page {
    background: var(--white);
    color: var(--contrast-text-color);
    transition: 0.3s;
    cursor: pointer;

    :hover {
      background: var(--gray);
    }

    &--prev {
      border-radius: 5px 0 0 5px;
    }

    &--next {
      border-radius: 0 5px 5px 0;
    }

    &--disabled {
      background: var(--light-gray);
      color: var(--disabled-text-color);
      cursor: default;

      :hover {
        background: var(--light-gray);
        color: var(--disabled-text-color);
      }
    }

    &--hidden {
      display: none;
    }

    a {
      display: block;
      padding: 10px;
      outline: none;
    }
  }
`;
