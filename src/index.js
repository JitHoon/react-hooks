import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseState />
    <App />
    <UseEffect />
  </React.StrictMode>
);