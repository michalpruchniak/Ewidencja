import actions from './actions'
import address from '../../address'


const fetchDevices = async () => {
    const response = await fetch(address + '/devices', { method: 'GET' })
    const json = await response.json();

    return json;
}

export const getAllDevices = () =>
    async (dispatch) => {
        const devices = await fetchDevices()

        devices.map(device => dispatch(actions.add(device)))
    }
