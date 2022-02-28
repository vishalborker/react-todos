import { 
    createStore, 
    combineReducers, 
    applyMiddleware 
} from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos } from './todos/reducers';

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)
  )
);