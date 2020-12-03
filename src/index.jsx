import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import reportWebVitals from './reportWebVitals';
import App from './App';

const store = createStore(
  reducers, // Reducers
  {}, // estado inicial
  applyMiddleware(reduxThunk),
);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter basename="/">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
