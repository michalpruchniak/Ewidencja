import types from './types'
const INIT_PRODUCERS = {
    list: []
};

const producers = (state = INIT_PRODUCERS, action) => {
    switch(action.type){
        case types.add_producer:
            return {
                ...state,
                list: [...state.list, action.item]
            }
        default:
            return state;
    }
}
export default producers;