import React from 'react'
import { connect} from 'react-redux'
import Device from './device'

const DevicesContainer = ({ devices }) => {
    return (
        <React.Fragment>
            {devices.list.map(device =>
                <Device key={device.id} device={device} />
            )}
        </React.Fragment>
    );
}
const mapStateToProps = state => ({
    devices: state.devices
})

export default connect(mapStateToProps, null)(DevicesContainer);