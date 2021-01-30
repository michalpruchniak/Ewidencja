import types from './types'
const INITIAL_UNITS = {
    list: []
}

const units = (state = INITIAL_UNITS, action) => {
    switch(action.type){
        case types.add_unit:
        return {
          ...state,
          list: [...state.list, action.item]
        }
        default:
            return state;
    }
}

export default units
