import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { reducer as reduxFormReducer } from 'redux-form';

import units from './components/units/reducer'
import people from './components/people/reducer'



const reducers = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    units: units,
    people: people
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
