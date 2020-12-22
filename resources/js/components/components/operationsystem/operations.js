import actions from './actions'

const fetchOperationsystem= async () => {
    const response = await fetch('http://localhost:8000/operationsystem', { method: 'GET' })
    const json = await response.json();

    return json;
}

export const getAllOperationsystem = () =>
    async (dispatch) => {
        const operationsystem = await fetchOperationsystem()
        operationsystem.map(operationsystem => dispatch(actions.add(operationsystem)))
    }