import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { GlobalStore } from './Redux/Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <Provider store={GlobalStore}>
      <App />
    </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
