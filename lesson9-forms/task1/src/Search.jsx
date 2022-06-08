import React, { Component } from 'react';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) +
// 4. declare state (what, where) and props ++
// 5. write logic +++

// algo
// 1 state.value => input value +++
// 2 search click => alert => Search text: {text} +++
// 3 refactoring +++

// state
// value

class Search extends Component {
  state = {
    value: '',
  };

  changeValueHandler = e => {
    this.setState({
      value: e.target.value,
    });
  };

  submitSearch = e => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    const { value } = this.state;
    const { changeValueHandler } = this;
    const { submitSearch } = this;

    return (
      <form className="search">
        <input type="text" className="search__input" value={value} onChange={changeValueHandler} />
        <button className="search__button" onClick={submitSearch}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
