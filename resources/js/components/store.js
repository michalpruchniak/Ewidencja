import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import units from './components/units/reducer'
import people from './components/people/reducer'
import types from './components/types/reducer'
import producers from './components/producers/reducer'
import operationSystem from './components/operationsystem/reducer'
import handoverProtocol from './components/handoverprotocol/reducer'
import devices from './components/device/reducer';



const reducers = combineReducers({
    devices: devices,
    units: units,
    people: people,
    types: types,
    producers: producers,
    operationSystem: operationSystem,
    handoverProtocol: handoverProtocol
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
