import React from 'react';

const Pagination = ({ currentPage, goNext, goPrev, itemsPerPage, totalItems }) => {
  const isPrevPageUnavailable = currentPage === 1;
  const isNextPageUnavailable = currentPage * itemsPerPage >= totalItems;
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageUnavailable}>
        {isPrevPageUnavailable ? '' : '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageUnavailable}>
        {isNextPageUnavailable ? '' : '→'}
      </button>
    </div>
  );
};

export default Pagination;

// import React from 'react';

// const Pagination = ({ currentPage, goNext, goPrev, itemsPerPage, totalItems }) => {
//   const isPrevPageAvailable = currentPage > 1;
//   const isNextPageAvailable = totalItems - itemsPerPage * currentPage > 0;

//   return (
//     <div className="pagination">
//       <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
//         {isPrevPageAvailable ? '←' : ''}
//       </button>
//       <span className="pagination__page">{currentPage}</span>
//       <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
//         {isNextPageAvailable ? '→' : ''}
//       </button>
//     </div>
//   );
// };

// export default Pagination;
