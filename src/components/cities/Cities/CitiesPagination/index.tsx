import React from 'react';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const CitiesPagination = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}: Props): React.ReactElement => {
  const pageCount = Math.ceil(total / perPage);
  const isSinglePage = pageCount === 1;

  const handlePageClick = (selectedItem: { selected: number }): void => {
    onPageChange(selectedItem.selected);
  };

  return (
    <S.CitiesPagination isSinglePage={isSinglePage}>
      <ReactPaginate
        initialPage={currentPage}
        pageCount={pageCount}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        onPageChange={handlePageClick}
        previousLabel={<FontAwesomeIcon icon={faChevronLeft} size="1x" />}
        nextLabel={<FontAwesomeIcon icon={faChevronRight} size="1x" />}
        breakLabel={null}
        containerClassName="pagination"
        pageClassName="page page--hidden page--number page--number--hidden"
        previousClassName="page page--prev"
        nextClassName="page page--next"
        disabledClassName="page page--control page--disabled page--control--disabled"
      />
    </S.CitiesPagination>
  );
};

export default CitiesPagination;
