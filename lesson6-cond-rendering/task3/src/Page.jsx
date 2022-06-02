import React from 'react';
import Message from './Message';

// algo Page
// 1 добавити розмітку +++
// 2  добавити text в стейт +++
// 3 створити метод setText +++
// 4 добавити на клік метод setText +++
const text1 = 'Hello, world!';
const text2 = 'Another exiciting text.';

class Page extends React.Component {
  state = {
    text: null,
  };

  setText = text => {
    this.setState({
      text: text,
    });
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(text1)}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.setText(text2)}>
            Text 2
          </button>
          <button className="btn" onClick={() => this.setText(null)}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
