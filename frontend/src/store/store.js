import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import registerReducer from './reducers/authReducers';

export const store = configureStore({
  reducer: {
    register:registerReducer

  },
});
