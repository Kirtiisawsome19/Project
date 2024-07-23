
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers/Main'; // Ensure this path is correct

const store = configureStore({
  reducer: rootReducer,
});

export default store;

