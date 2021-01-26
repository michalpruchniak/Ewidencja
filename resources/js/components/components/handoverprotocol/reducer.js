const INITIAL_HANDOVER_PROTOCOL = {
    fromTo: [],
    list: [],
    protocols: [],
}

const handoverProtocol = (state = INITIAL_HANDOVER_PROTOCOL, action) => {
    switch(action.type){
        case 'NEW_HANDOVER_PROTOCOL':
            return {
                ...state,
                fromTo: [action.item]
            }
        case 'ADD_DEVICE_TO_LIST':
            return {
                ...state,
                list: [...state.list, action.item]
            }
        case 'RESET_HANDOVER_PROTOCOL':
            return {
                ...state,
                fromTo: [],
                list: []
            }
        case 'DELETE_DEVICE_HANDOVER_PROTOCOL':
            return {
                ...state,
                list: [...state.list.filter(device => device.id !== action.id)],
            }
        case 'ADD_NEW_PROTOCOL':
            const newprotocol = action.item;
            newprotocol.devices = [];
            return {
                ...state,
                protocols: [...state.protocols, newprotocol],
            }

            case 'ADD_DEVICE_TO_PROTOCOL':
            const { protocol_id, name } = action.item
            const protocols = [...state.protocols];
            protocols.filter((x) => {
                if(x.id == protocol_id){
                    x.devices.push(name)
                }
            })

            return {
                ...state,
                protocols
            }
        default:
            return state
    }
}

export default handoverProtocol;