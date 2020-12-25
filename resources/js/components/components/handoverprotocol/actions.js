const addDevice = item => ({ type: 'ADD_DEVICE_TO_LIST', item })
const newprotocol = item => ({ type: 'NEW_HANDOVER_PROTOCOL', item })

export default {
    addDevice,
    newprotocol
}