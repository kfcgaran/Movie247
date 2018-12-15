import { createStore, applyMiddleware } from 'redux'
import getRootReducer from './reducers'
import thunk from 'redux-thunk'

export default function getStore(navReducer, Middleware) {
    return store = createStore(getRootReducer(navReducer), undefined, applyMiddleware(thunk, Middleware))
}