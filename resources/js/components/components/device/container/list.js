import React from 'react'
import { connect} from 'react-redux'

const DevicesContainer = ({ devices }) => {
    return (
        <div className="card">
            {devices.list.map(device =>
            <React.Fragment key={device.id}>
                <div className="card-header">
                    <b>{device.id}. {device.name}</b>
                </div>
                <div className="card-body">
                    Hello
                </div>
            </React.Fragment>
            )}
        </div>
    );
}
const mapStateToProps = state => ({
    devices: state.devices
})
export default connect(mapStateToProps, null)(DevicesContainer);