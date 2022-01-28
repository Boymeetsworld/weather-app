import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import weatherReducer from './reducer/weatherReducer';
import alertReducer from './reducer/alertReducer';
import { type } from 'os';

const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
