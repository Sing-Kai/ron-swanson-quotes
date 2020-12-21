import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Quote} from './reducer/quoteReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({quote: Quote}), 
        applyMiddleware(thunk)
    );

    return store;
}