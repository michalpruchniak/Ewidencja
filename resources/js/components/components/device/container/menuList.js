import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validateDevice from '../velidateDevice'

const MenuList = ({ flag, addDevice, device, handoverProtocol }) => {

    function addDeviceToProtocol(e) {
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
    return(
        <React.Fragment>
            {flag === 1 ?
                <a href="#" onClick={addDeviceToProtocol}>Dodaj do dok. przekazania</a> :
                <span>Dodaj do dok. przekazania</span>
            }
        </React.Fragment>
    );

}

export default MenuList