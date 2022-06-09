import React from 'react';

const Pagination = ({ curPage, goNext, goPrev, itemPerPage, totalItems }) => {
  const isPrevPageAvailable = curPage > 1;
  const isNextPageAvailable = totalItems - itemPerPage * curPage > 0;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable ? '←' : ''}
      </button>
      <span className="pagination__page">{curPage}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable ? '→' : ''}
      </button>
    </div>
  );
};

export default Pagination;

//   const isPrevPageAvailable = curPage === Math.ceil(totalItems / itemPerPage);
//   const isNextPageAvailable = curPage === 1;
