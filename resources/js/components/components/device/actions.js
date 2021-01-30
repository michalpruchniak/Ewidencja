const add = item => ({ type: 'ADD_DEVICE', item })
const updateUnit = item => ({ type: 'UPDATE_UNIT', item })

export default {
    add,
    updateUnit
}