import React from 'react';

const Pagination = ({ curPage, goNext, goPrev, itemPerPage, totalItems }) => {
  const prevPageAvailable = curPage > 1;
  const nextPageAvailable = totalItems - itemPerPage * curPage > 0;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!prevPageAvailable}>
        {prevPageAvailable ? '←' : ''}
      </button>
      <span className="pagination__page">{curPage}</span>
      <button className="btn" onClick={goNext} disabled={!nextPageAvailable}>
        {nextPageAvailable ? '→' : ''}
      </button>
    </div>
  );
};

export default Pagination;

//   const isPrevPageAvailable = curPage === Math.ceil(totalItems / itemPerPage);
//   const isNextPageAvailable = curPage === 1;
