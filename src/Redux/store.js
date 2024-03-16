import {configureStore} from '@reduxjs/toolkit';
//import { composeWithDevTools } from "redux-devtools-extension";

import rootReducers from './reducer';
const store = configureStore({
    reducer: rootReducers,
    //composeWithDevTools()

})

export default store;