import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import pausePlayReducer from './store/reducers/pausePlayReducer';
import transportReducer from './store/reducers/transportReducer';
import dataReducer from './store/reducers/dataReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reducerFunction = combineReducers({
  pausePlay: pausePlayReducer,
  transport: transportReducer,
  data: dataReducer
})

const store = createStore(reducerFunction);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
