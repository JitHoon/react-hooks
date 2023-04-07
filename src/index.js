import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UseState from './Hooks/UseState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UseState />
  </React.StrictMode>
);