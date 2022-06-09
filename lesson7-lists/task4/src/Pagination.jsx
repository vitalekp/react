import React from 'react';

const Pagination = ({ currentPage, goNext, goPrev, itemsPerPage, totalItems }) => {
  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable = totalItems - itemsPerPage * currentPage > 0;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable ? '←' : ''}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable ? '→' : ''}
      </button>
    </div>
  );
};

export default Pagination;

//   const isPrevPageAvailable = curPage === Math.ceil(totalItems / itemPerPage);
//   const isNextPageAvailable = curPage === 1;
