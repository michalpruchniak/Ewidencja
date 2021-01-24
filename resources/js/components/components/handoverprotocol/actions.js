const addDevice = item => ({ type: 'ADD_DEVICE_TO_LIST', item })
const newprotocol = item => ({ type: 'NEW_HANDOVER_PROTOCOL', item })
const reset = () => ({ type: 'RESET_HANDOVER_PROTOCOL' })
const deleteDevice = id => ({ type: 'DELETE_DEVICE_HANDOVER_PROTOCOL', id })
const addNewProtocol = item => ({ type: 'ADD_NEW_PROTOCOL', item })
const addDeviceToProtocol = item => ({ type: 'ADD_DEVICE_TO_PROTOCOL', item })

export default {
    addDevice,
    newprotocol,
    reset,
    deleteDevice,
    addNewProtocol,
    addDeviceToProtocol
}