const INIT_DEVICES = {
    list: []
}

const devices = (state = INIT_DEVICES, action) => {
    switch (action.type) {
        case 'ADD_DEVICE':
            return {
                list: [...state.list, action.item]
            }
        case 'UPDATE_UNIT':
            const index = state.list.findIndex(device => device.id == action.item.id);
            const newList = [...state.list];
            console.log(index);
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