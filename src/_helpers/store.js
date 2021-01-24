import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';

import reducers from './reducers';

export const store = configureStore({
  reducer: combineReducers(reducers),
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
});