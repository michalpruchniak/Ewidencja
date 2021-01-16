import actions from './actions'

const fetchProtocols = async () => {
    const response = await fetch('http://localhost:8000/protocols', { method: 'GET' })
    const json = await response.json();

    return json;
}

export const getAllProtocols = () =>
    async (dispatch) => {
        const protocols = await fetchProtocols()

        protocols.map(protocol => dispatch(actions.addNewProtocol(protocol)))
    }
