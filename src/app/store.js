// store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice';
import { loadItems } from './actions';
import itemsReducer from './reducer';
import { combineReducers } from '@reduxjs/toolkit'; 

const rootReducer = combineReducers({
  tasks: taskReducer,
  items: itemsReducer,
  
});

export const store = configureStore({
  reducer: rootReducer,
});
