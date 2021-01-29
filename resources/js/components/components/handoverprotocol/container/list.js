import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Device from '../../device/container/device'

const List = ({ handoverProtocol, units, reset, addNewProtocol, addDeviceToProtocol }) => {

    const from = handoverProtocol.fromTo[0].from;
    const to = handoverProtocol.fromTo[0].to;
    const devices = handoverProtocol.list;

    const storeProtocol = async () => {
        const API = axios.create({
            baseURL: 'http://localhost:8000/protocols',
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },

        });


        try {
            const values = {
                from_id: from,
                to_id: to,
                devices: devices
            };

            await API.post('store', values);
            handoverProtocol.list.map(async device => {
                const updated = {
                    device: device.id,
                    unit_id: to
                }
                await API.post("updateunit", updated)

            });
            addNewProtocol(values);
            devices.map((device) => addDeviceToProtocol(device));

            toast.success('Protokół przekazania został zapisany w bazie danych', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            reset();
        } catch (error) {
            console.log(error);
        }
    }
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
                    <button className="btn btn-success" onClick={() => storeProtocol()}>Zapisz protokół przekazania</button>
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
    delete: id => dispatch(actions.deleteDevice(id)),
    addNewProtocol: protocol => dispatch(actions.addNewProtocol(protocol)),
    addDeviceToProtocol: device => dispatch(actions.addDeviceToProtocol(device)),

})

export default connect(mapStateToProps, mapDispatchToProps)(List);