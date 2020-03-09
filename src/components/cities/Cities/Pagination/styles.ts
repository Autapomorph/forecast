import styled, { css } from 'styled-components/macro';

import { ThemeProp } from 'models';

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
    background: ${({ theme }: ThemeProp) => theme.paginationBg};
    color: ${({ theme }: ThemeProp) => theme.paginationColor};
    transition: 0.3s;
    cursor: pointer;

    :hover {
      background: ${({ theme }: ThemeProp) => theme.paginationHoverBg};
    }

    &--prev {
      border-radius: 5px 0 0 5px;
    }

    &--next {
      border-radius: 0 5px 5px 0;
    }

    &--disabled {
      background: ${({ theme }: ThemeProp) => theme.paginationDisabledBg};
      color: ${({ theme }: ThemeProp) => theme.paginationDisabledColor};
      cursor: default;

      :hover {
        background: ${({ theme }: ThemeProp) => theme.paginationDisabledBg};
        color: ${({ theme }: ThemeProp) => theme.paginationDisabledColor};
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
