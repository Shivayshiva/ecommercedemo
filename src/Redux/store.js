//import {configureStore} from '@reduxjs/toolkit';
////import { composeWithDevTools } from "redux-devtools-extension";

//import rootReducers from './reducer';
//const store = configureStore({
//    reducer: rootReducers,
//    //composeWithDevTools()

//})

//export default store;

//import { createStore } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;// defaults to localStorage for web
import rootReducer from './reducer/index'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
  let store = configureStore({reducer:persistedReducer})
  export let persistor = persistStore(store);
//  export persistor;
  export default store;
  

  ///////////////////

//  import { combineReducers } from 'redux';
//import { configureStore } from '@reduxjs/toolkit';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//// Import your reducers
//import counterReducer from './counterReducer';

//// Redux Persist configuration
//const persistConfig = {
//  key: 'root',
//  storage,
//  // Optionally, configure blacklist or whitelist to specify which reducers to persist
//  // blacklist: ['counter'], // reducers to exclude from persisting
//  // whitelist: ['auth'], // reducers to include for persisting
//};

//// Combine reducers
//const rootReducer = combineReducers({
//  counter: counterReducer,
//  // Add other reducers here
//});

//// Wrap root reducer with persistReducer
//const persistedReducer = persistReducer(persistConfig, rootReducer);

//// Create the Redux store
//const store = configureStore({
//  reducer: persistedReducer,
//});

//export default store;
