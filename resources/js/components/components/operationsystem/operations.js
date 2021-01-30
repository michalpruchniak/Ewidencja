import actions from './actions'
import address from '../../address'


const fetchOperationsystem= async () => {
    const response = await fetch(address + '/operationsystem', { method: 'GET' })
    const json = await response.json();

    return json;
}

export const getAllOperationsystem = () =>
    async (dispatch) => {
        const operationsystem = await fetchOperationsystem()
        operationsystem.map(operationsystem => dispatch(actions.add(operationsystem)))
    }