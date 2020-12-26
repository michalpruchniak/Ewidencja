import actions from './actions'

const fetchDevices = async () => {
    const response = await fetch('http://localhost:8000/devices', { method: 'GET' })
    const json = await response.json();

    return json;
}

export const getAllDevices = () =>
    async (dispatch) => {
        const devices = await fetchDevices()

        devices.map(device => dispatch(actions.add(device)))
    }
