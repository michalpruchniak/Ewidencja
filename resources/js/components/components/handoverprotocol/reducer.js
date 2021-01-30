import types from './types'

const INITIAL_HANDOVER_PROTOCOL = {
    from: '',
    to: '',
    basics: '',
    list: [],
    protocols: [],
}

const handoverProtocol = (state = INITIAL_HANDOVER_PROTOCOL, action) => {
    switch(action.type){
        case types.new_handover_protocol:
            return {
                ...state,
                from: action.item.from,
                to: action.item.to,
                basics: action.item.basics,
            }
        case types.add_device_to_list:
            return {
                ...state,
                list: [...state.list, action.item]
            }
        case types.reset_handover_protocol:
            return {
                from: '',
                to: '',
                basics: '',
                list: [],
                protocols: [...state.protocols]
            }
        case types.delete_device_handover_protocol:
            return {
                ...state,
                list: [...state.list.filter(device => device.id !== action.id)],
            }
        case types.add_new_protocol:
            const newprotocol = action.item;
            newprotocol.devices = [];
            return {
                ...state,
                protocols: [...state.protocols, newprotocol],
            }

            case types.add_device_to_protocol:
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