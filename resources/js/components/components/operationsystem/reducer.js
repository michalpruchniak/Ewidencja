const INIT_OPERATION_SYSTEM= {
    list: []
};

const operationSystem = (state = INIT_OPERATION_SYSTEM, action) => {
    switch(action.type){
        case 'ADD_OPERATION_SYSTEM':
            return {
                ...state,
                list: [...state.list, action.item]
            }
        default:
            return state;
    }
}
export default operationSystem;