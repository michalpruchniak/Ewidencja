import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions'

import Device from '../../device/container/device'

const List = ({ handoverProtocol, units, reset }) => {

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4 col-md-2"><b>Z</b></div>
                <div className="col-8 col-md-10">{units.list.find(x => x.id == handoverProtocol.fromTo[0].from).name}</div>
            </div>
            <div className="row">
                <div className="col-4 col-md-2"><b>Do</b></div>
                <div className="col-8 col-md-10">{units.list.find(x => x.id == handoverProtocol.fromTo[0].to).name}</div>
            </div>
            <div className="row">
                <b>Urządzenia</b>
            </div>
            <div className="row">
                <div className="col-12">{handoverProtocol.list.map(device => <Device key={device.id} device={device} />) }</div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-danger" onClick={() => reset()}>Usuń protokół przekazania</button>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol,
    units: state.units
});

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(actions.reset()),
    delete: id => dispatch(actions.deleteDevice(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(List);