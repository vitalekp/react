import React from 'react';

// algo ColorPicker
// 1 rendering layout +++
// 2 створити метод, який показує назву кольору
// 3 добавити обробники в елементи +++
// 4 export +++

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorName: '',
    };
  }

  showColorHandler = color => {
    this.setState({
      colorName: color,
    });
  };
  // showColorHandler = e => {
  //   const arrClass = e.target.className.split('_');
  //   const colorName = arrClass[arrClass.length - 1];
  //   this.setState({
  //     colorName: colorName[0].toUpperCase() + colorName.slice(1),
  //   });
  // };

  clearColorHandler = () => {
    this.setState({
      colorName: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.showColorHandler('Coral')}
            onMouseOut={this.clearColorHandler}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.showColorHandler('Aqua')}
            onMouseOut={this.clearColorHandler}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.showColorHandler('Bisque')}
            onMouseOut={this.clearColorHandler}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
