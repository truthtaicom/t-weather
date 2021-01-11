import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages';
import { ApplicationInitialState } from './redux/rootReducer';
import configureStore from './redux/store';
import reportWebVitals from './reportWebVitals';
import { Store } from "redux";
import { Provider } from "react-redux";
import createServer from './mockServer'
import './i18n';

const store: Store = configureStore(ApplicationInitialState);
createServer()


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
