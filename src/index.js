import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';
import UseRef from './Hooks/UseRef';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <blockquote>
      <UseState />
      <App />
    </blockquote>
    <blockquote>      
      <UseEffect />
    </blockquote>
    <blockquote>
      <UseRef />
    </blockquote>
  </React.StrictMode>
);