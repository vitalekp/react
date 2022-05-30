import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// algo
// 1 func renderSeconds (time) +++
// 2 добавити jsx розмітку +++
// 3 добавити стилі backgroundColor +++
// 4 добавити стилі тексту +++
// 5 відмалювати дані +++

const rootElem = document.querySelector('#root');

const renderSeconds = time => {
  const seconds = new Date(time).getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 === 0 ? '#000' : '#fff';
  const style = {
    color: textColor,
    backgroundColor,
  };
  const element = (
    <div className="seconds" style={style}>
      Now is {seconds}
    </div>
  );

  ReactDOM.render(element, rootElem);
};

setInterval(() => renderSeconds(new Date()), 1000);
