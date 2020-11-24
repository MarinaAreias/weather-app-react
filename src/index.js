import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
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
