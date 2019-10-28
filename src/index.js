import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Plant from './Plant';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Plant />, document.getElementById('root'));

// If you want your Plant to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
