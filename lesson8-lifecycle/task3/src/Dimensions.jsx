import React, { Component } from 'react';

// algo Dimensions
// 1 add innerWidth & innerHeigth to state +++
// 2 ініціалізувати в DidMount() дані розміру сторінки +++
// 3  створити метод onResize, який буде оновлювати розмір сторінки +++
// 4 створити метод setDimensions, який дізнається розмір сторінки +++
// 5 відписатий від подій WillUnmount() +++

class Dimensions extends Component {
  state = {
    width: null,
    height: null,
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

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${width} x ${height}`;
  };

  render() {
    const { width, height } = this.state;

    return <div className="dimensions">{`${width}px - ${height}px`}</div>;
  }
}

export default Dimensions;
