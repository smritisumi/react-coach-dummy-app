import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import Store from '../src/store/store';
import './style/style.css';

ReactDOM.render( 
  <Provider store = { Store } >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,    
  document.getElementById('root')
);

