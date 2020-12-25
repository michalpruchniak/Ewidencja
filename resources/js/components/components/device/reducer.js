const INIT_DEVICES = {
    list: []
};

const devices = (state = INIT_DEVICES, action) => {
    switch (action.type) {
        case 'ADD_DEVICE':
            return {
                list: [...state.list, action.item]
            }
        default:
            return state;
    }
}
export default devices;