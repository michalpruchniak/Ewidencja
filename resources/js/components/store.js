import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import units from './components/units/reducer'
import people from './components/people/reducer'
import types from './components/types/reducer'
import producers from './components/producers/reducer'
import operationsystem from './components/operationsystem/reducer'



const reducers = combineReducers({
    units: units,
    people: people,
    types: types,
    producers: producers,
    operationsystem: operationsystem
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
