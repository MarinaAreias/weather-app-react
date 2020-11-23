import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OpenSource from './OpenSource';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <OpenSource/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
