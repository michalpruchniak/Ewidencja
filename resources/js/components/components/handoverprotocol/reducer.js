const INITIAL_HANDOVER_PROTOCOL = {
    fromTo: [],
    list: []
}

const handoverProtocol = (state = INITIAL_HANDOVER_PROTOCOL, action) => {
    switch(action.type){
        case 'NEW_HANDOVER_PROTOCOL':
            return {
                fromTo: [action.item],
                list: [...state.list],
            }
        case 'ADD_DEVICE_TO_LIST':
            return {
                fromTo: [...state.fromTo],
                list: [...state.list, action.item]
            }
        case 'RESET_HANDOVER_PROTOCOL':
            return {
                fromTo: [],
                list: []
            }
        default:
            return state
    }
}

export default handoverProtocol;