import React, { Component } from 'react';

// algo Dimensions
// 1 add innerWidth & innerHeigth to state +++
// 2 ініціалізувати в DidMount() дані розміру сторінки +++
// 3  створити метод onResize, який буде оновлювати розмір сторінки +++
// 4 створити метод setDimensions, який дізнається розмір сторінки +++
// 5 відписатий від подій WillUnmount() +++

class Dimension extends Component {
  state = {
    innerWidth: null,
    innerHeight: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;

    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, heigth) => {
    this.setState({
      innerWidth: width,
      innerHeight: heigth,
    });
    document.title = `${innerHeight} x ${innerWidth}`;
  };

  render() {
    return (
      <div className="dimensions">{`${this.state.innerHeight}px x ${this.state.innerWidth}px`}</div>
    );
  }
}

export default Dimension;
