import { combineReducers } from 'redux';
import dataReducer from './dataReducer'

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        data: dataReducer,
    })
}