import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'


import actions from '../../handoverprotocol/actions'
import validateDevice from '../velidateDevice'
import MenuList from './menuList'
import MenuProtocol from './menuProtocol'


const Device = ({device, type, addDevice, handoverProtocol}) => {
    const [flag, setFlag] = useState(0);
    useEffect(() => {
        if(handoverProtocol.fromTo.length > 0){
            setFlag(validateDevice(device, handoverProtocol).flag);
        }
    });


    return (
        <div className="card break-15">
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
                        {type === "list" ? <MenuList flag={flag}
                                            device={device}
                                            addDevice={addDevice}
                                            handoverProtocol={handoverProtocol}
                                            />
                                         : <MenuProtocol device={device} />}
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