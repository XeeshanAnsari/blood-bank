import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux'
import './index.css';

ReactDOM.render(
  <Provider>
     <App />
  </Provider>   ,
  document.getElementById('root')
);
