import { map } from 'lodash';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import actions from '../../handoverprotocol/actions'
import validateDevice from '../velidateDevice'


const Device = ({device, addDevice, handoverProtocol}) => {
    const [flag, setFlag] = useState(0);
    useEffect(() => {
        if(handoverProtocol.fromTo.length > 0){
            setFlag(validateDevice(device, handoverProtocol).flag);
        }
    });
    function addDeviceToProtocol (e) {
        e.preventDefault();
        const validate = validateDevice(device, handoverProtocol)
        if (validate.flag == 1) {
            addDevice(device);
            toast.success('Urządzenie zostało dodane', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error(validate.msg, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                <b>{device.id}. {device.name} / {device.inventory}</b>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-7">
                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <td><b>Numer inwentarzowy</b></td>
                                    <td>{device.inventory}</td>
                                    <td>Unit: {device.unit_id}</td>
                                </tr>
                                <tr>
                                    <td><b>Cena zakupu</b></td>
                                    <td>
                                        {device.purchase_price}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-5">
                        {flag === 1 ?
                            <a href="#" onClick={addDeviceToProtocol}>Dodaj do dok. przekazania</a> :
                            <span>Dodaj do dok. przekazania</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol

});

const mapDispatchToProps = dispatch => ({
    addDevice: device => dispatch(actions.addDevice(device))
})
export default connect(mapStateToProps, mapDispatchToProps)(Device);