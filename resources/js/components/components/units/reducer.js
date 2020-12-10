const INITIAL_UNITS = {
    list: []
}

const units = (state = INITIAL_UNITS, action) => {
    switch(action.type){
        case 'ADD_UNIT':
        return {
          ...state,
          list: [...state.list, action.item]
        }
        default:
            return state;
    }
}

export default units
