import actions from './actions'

const fetchProducers= async () => {
    const response = await fetch('http://localhost:8000/producers', { method: 'GET' })
    const json = await response.json();

    return json;
}

export const getAllProducers = () =>
    async (dispatch) => {
        const producers = await fetchProducers()
        producers.map(producer => dispatch(actions.add(producer)))
    }
