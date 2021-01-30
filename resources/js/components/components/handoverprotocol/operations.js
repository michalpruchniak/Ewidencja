import actions from './actions'
import address from '../../address'


const fetchProtocols = async () => {
    const response = await fetch(address + '/protocols', { method: 'GET' });
    const json = await response.json();

    return json;
}
const fetchDevicesWithProtocol = async () => {
    const response = await fetch(address + '/devices-with-protocols', { method: 'GET' });
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