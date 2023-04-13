import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';
import UseRef from './Hooks/UseRef';
import UseConfirm from './functionalCode/UseConfirm';
import UsePreventLeave from './functionalCode/UsePreventLeave';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <blockquote>
      <h3>{"Hooks 🙃"}</h3>
      <UseState />
      <App />
    </blockquote>
    <blockquote>      
      <UseEffect />
    </blockquote>
    <blockquote>
      <UseRef />
    </blockquote>
    <blockquote>
      <h3>{"Functional Programming 🙃"}</h3>
      <UseConfirm />
      <UsePreventLeave />
    </blockquote>
  </React.StrictMode>
);