import actions from './actions'
import address from '../../address'

const fetchProducers= async () => {
    const response = await fetch(address + '/producers', { method: 'GET' })
    const json = await response.json();

    return json;
}

export const getAllProducers = () =>
    async (dispatch) => {
        const producers = await fetchProducers()
        producers.map(producer => dispatch(actions.add(producer)))
    }
