import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

import * as reducers from './reducers'

const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true });
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;