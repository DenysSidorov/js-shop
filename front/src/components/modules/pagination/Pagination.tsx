import React, {useCallback} from 'react';
import './index.scss';
import ReactPaginate from 'react-paginate';

interface IPagination {
  pageCount: number;
  inOnePage: number;
  paginationPageActive: number;
  onPageChange: Function | any;
}

const Pagination = ({onPageChange, pageCount, inOnePage, paginationPageActive}: IPagination) => {
  const pagesize = 50;

  const hrefBuilder = useCallback((numberPage) => {
    return `/shop?numberpage=${numberPage}&pagesize=${pagesize}`;
  }, []);

  const pageCountInt = pageCount === pagesize ? 1 : (pageCount - (pageCount % inOnePage)) / inOnePage + 1;
  if (pageCount === 1) return null;

  return (
    <ReactPaginate
      hrefBuilder={hrefBuilder}
      disableInitialCallback
      initialPage={Number(paginationPageActive)}
      pageRangeDisplayed={5}
      pageCount={pageCountInt}
      marginPagesDisplayed={1}
      onPageChange={onPageChange}
      containerClassName='paginationContainerUL'
      activeClassName='activeLI'
      pageClassName='pageClassName'
      disabledClassName='disabledClassName'
      previousLabel={'<<'}
      nextLabel={'>>'}
    />
  );
};

export default Pagination;
