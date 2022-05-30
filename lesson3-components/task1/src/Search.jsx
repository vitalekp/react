import React from 'react';

// algo
// 1 створити компоненту SearchField (props), відмалювати в #root

export const SearchField = name => {
  return (
    <div className="search">
      <h1 className="search__title">{`Hello, ${name.name}. What to search for you?`}</h1>
      <div className="search__field">
        <input type="text" class="search__input" />
        <button className="search__button">Search</button>
      </div>
    </div>
  );
};
