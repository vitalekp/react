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
      color: '',
    };
  }

  showColorHandler = e => {
    const arrClass = e.target.className.split('_');
    const colorName = arrClass[arrClass.length - 1];
    this.setState({
      color: colorName[0].toUpperCase() + colorName.slice(1),
    });
  };

  clearColorHandler = () => {
    this.setState({
      color: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={this.showColorHandler}
            onMouseOut={this.clearColorHandler}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={this.showColorHandler}
            onMouseOut={this.clearColorHandler}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={this.showColorHandler}
            onMouseOut={this.clearColorHandler}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
