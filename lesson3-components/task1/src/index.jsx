import React from 'react';
import ReactDOM from 'react-dom';
import { SearchField } from './Search.jsx';
import './search.scss';
import './index.scss';

const rootElem = document.querySelector('#root');

ReactDOM.render(<SearchField name="Bob" />, rootElem);
