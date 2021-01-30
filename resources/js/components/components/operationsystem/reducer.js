import types from './types'

const INIT_OPERATION_SYSTEM= {
    list: []
};

const operationSystem = (state = INIT_OPERATION_SYSTEM, action) => {
    switch(action.type){
        case types.add_operation_system:
            return {
                ...state,
                list: [...state.list, action.item]
            }
        default:
            return state;
    }
}
export default operationSystem;