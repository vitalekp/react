import React from 'react';

const Pagination = ({ curPage, goNext, goPrev, itemPerPage, totalItems }) => {
  const isPrevPageAvailable = curPage === 1;
  const isNextPageAvailable = curPage === Math.ceil(totalItems / itemPerPage);
  return (
    <div className="pagination">
      <button disabled={isPrevPageAvailable} onClick={goPrev} className="btn">
        {isPrevPageAvailable ? '' : '←'}
      </button>
      <span className="pagination__page">{curPage}</span>
      <button disabled={isNextPageAvailable} onClick={goNext} className="btn">
        {isNextPageAvailable ? '' : '→'}
      </button>
    </div>
  );
};

export default Pagination;

// import React from 'react';

// const Pagination = ({ curPage, goNext, goPrev, itemPerPage, totalItems }) => {
//   const isPrevPageAvailable = curPage === 1;
//   const isNextPageAvailable = curPage * itemPerPage >= totalItems;

//   return (
//     <div className="pagination">
//       <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable}>
//         {isPrevPageAvailable ? '' : '←'}
//       </button>
//       <span className="pagination__page">{curPage}</span>
//       <button className="btn" onClick={goNext} disabled={isNextPageAvailable}>
//         {isNextPageAvailable ? '' : '→'}
//       </button>
//     </div>
//   );
// };

// export default Pagination;
