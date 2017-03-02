import React from 'react';
import ReactDOM from 'react-dom';
import  {Provider } from 'react-redux'
 import route from './containers/route'
import store from './store/store'
import App from '../src/components/App'
import './bootstrap.css';

ReactDOM.render(
     <Provider store={store}>
        
        <App />     
     </Provider>   
   
    ,
  document.getElementById('root')
);
