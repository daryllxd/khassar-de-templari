import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

import './index.css';
import App from './App';
import rootReducer from './reducers'

WebFont.load({
  google: {
    families: ['Lato:300,400,700', 'sans-serif']
  }
});

const store = createStore(rootReducer)

export default store;

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
