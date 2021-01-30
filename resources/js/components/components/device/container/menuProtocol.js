import React from 'react'
import { connect } from 'react-redux'

import actions from '../../handoverprotocol/actions'

const MenuProtocol = ({ device, deleteDevice }) => {

    const deleteDeviceFromProtocol = (e) => {
        e.preventDefault();
        deleteDevice(device.id)

    }
    return (
        <React.Fragment>
            <a href="#" onClick={deleteDeviceFromProtocol} >Usuń</a>
        </React.Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteDevice: id => dispatch(actions.deleteDevice(id))

})

export default connect(null, mapDispatchToProps)(MenuProtocol);