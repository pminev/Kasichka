import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from '../TestRedux/CounterReducer';

const rootReducer = combineReducers(
    { count: counterReducer }
    );

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;