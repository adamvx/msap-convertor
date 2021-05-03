import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = document.getElementById('root')

const view = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(view, root);
