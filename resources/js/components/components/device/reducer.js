import types from './types'
const INIT_DEVICES = {
    list: []
}

const devices = (state = INIT_DEVICES, action) => {
    switch (action.type) {
        case types.add_device:
            return {
                list: [...state.list, action.item]
            }
        case types.update_unit:
            const index = state.list.findIndex(device => device.id == action.item.id);
            const newList = [...state.list];
            newList[index].unit_id = action.item.unit_id;

            return {
                ...state,
                list: newList
            }


        default:
            return state;
    }
}
export default devices;