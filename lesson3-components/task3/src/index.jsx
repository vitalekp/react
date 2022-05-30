import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import './styles.scss';

const rootElem = document.querySelector('#root');

const userInfo = {
  author: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/u10002',
};

ReactDOM.render(<Comment user={userInfo} text="Good job!" date={new Date()} />, rootElem);
