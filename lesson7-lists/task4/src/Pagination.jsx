import React from 'react';

const Pagination = ({ curPage, goNext, goPrev, itemPerPage, totalItems }) => {
  const isPrevPageInaccessible = curPage === 1;
  const isNextPageInaccessible = curPage * itemPerPage >= totalItems;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageInaccessible}>
        {isPrevPageInaccessible ? '' : '←'}
      </button>
      <span className="pagination__page">{curPage}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageInaccessible}>
        {isNextPageInaccessible ? '' : '→'}
      </button>
    </div>
  );
};

export default Pagination;

// const Pagination = ({ curPage, goNext, goPrev, itemPerPage, totalItems }) => {
//   const isPrevPageAvailable = curPage === Math.ceil(totalItems / itemPerPage);
//   const isNextPageAvailable = curPage === 1;
//   return (
//     <div className="pagination">
//       <button disabled={isNextPageAvailable} onClick={goPrev} className="btn">
//         {isNextPageAvailable ? '' : '←'}
//       </button>
//       <span className="pagination__page">{curPage}</span>
//       <button disabled={isPrevPageAvailable} onClick={goNext} className="btn">
//         {isPrevPageAvailable ? '' : '→'}
//       </button>
//     </div>
//   );
// };

// export default Pagination;
