import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import videosReducer from '../reducer/videoReducer';
// import sidebarReducer from './reducers/index';
import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
// //   sidebar: sidebarReducer,
//   videos: videosReducer,
// });

const store = configureStore({
//   reducer: rootReducer,
     reducer: {
  videos: videosReducer,
  

     }   
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
