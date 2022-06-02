import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Mailbox unreadMessages={[1, 2, 3, 4, 5]} />, rootElement);
