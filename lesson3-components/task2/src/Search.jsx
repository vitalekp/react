import React, { Component } from 'react';

// algo
// 1 створити компоненту SearchField (props), відмалювати в #root

export default class extends Component {
  render() {
    return (
      <div className="search">
        <h1 className="search__title">{`Hello, ${this.props.name}. What to search for you?`}</h1>
        <div className="search__field">
          <input type="text" class="search__input" />
          <button className="search__button">Search</button>
        </div>
      </div>
    );
  }
}
