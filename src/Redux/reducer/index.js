import handleCart from './handleCart'
import handleFlag from './handleFlag'

import { combineReducers } from "redux";
const rootReducers = combineReducers({
    handleCart,
    handleFlag
})
export default rootReducers