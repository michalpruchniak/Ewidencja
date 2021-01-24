import actions from './actions'

const fetchProtocols = async () => {
    const response = await fetch('http://localhost:8000/protocols', { method: 'GET' });
    const json = await response.json();

    return json;
}
const fetchDevicesWithProtocol = async () => {
    const response = await fetch('http://localhost:8000/devices-with-protocols', { method: 'GET' });
    const json = await response.json();

    return json;
}

export const getAllProtocols = () =>
    async (dispatch) => {
        const protocols = await fetchProtocols();
        protocols.map(protocol => dispatch(actions.addNewProtocol(protocol)))
        try {
            const devices = await fetchDevicesWithProtocol();
            devices.map(device => dispatch(actions.addDeviceToProtocol(device)))
        } catch(e) {
            console.log(e);
        }

    }