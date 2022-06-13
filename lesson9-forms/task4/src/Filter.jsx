import React from 'react';

// props
// filterText, count, onChange(callback)

// algo
// { name, age } => render data

const Filter = ({ filterText, count, onChange }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input type="text" className="filter__input" value={filterText} onChange={onChange} />
    </div>
  );
};

export default Filter;
