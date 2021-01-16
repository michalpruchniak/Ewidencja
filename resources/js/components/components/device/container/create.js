import React from "react";
import _ from "lodash/fp";
import{ connect } from 'react-redux';
import { useForm } from "react-hook-form";
import Error from '../../../alerts/error';
import actions from '../actions'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const createDevice = ({ units, types, producers,operationSystem, newDevice }) => {
    const { register, handleSubmit, errors } = useForm();

    const storeDevice = async (values, e) => {
        const API = axios.create({
            baseURL: 'http://localhost:8000/devices',
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },

        });

        try {
            console.log(values);
            await API.post('store', values)
                .then((res) => {
                    toast.success('Producent został dodany poprawnie', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    newDevice(res.data);

                });
            e.target.reset();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit(storeDevice)}>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="name">Nazwa</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="name" id="name" className="form-control" type="string" ref={register({ required: true, minLength: 7, maxLength: 50 })} />

                    {errors.name&& (
                        <Error alert="Nieprawidłowa nazwa" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="inventory">Numer inwentarzowy</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="inventory" id="inventory" className="form-control" type="string" ref={register({ required: true, minLength: 5, maxLength: 40 })} />

                    {_.get("inventory.type", errors) === "required" && (
                        <Error alert="Musisz podać numer inwentarzowy" />
                    )}
                    {_.get("inventory.type", errors) === "minLength" && (
                        <Error alert="Numer inwentarzowy jest za krótki" />
                    )}
                    {_.get("inventory.type", errors) === "maxLength" && (
                        <Error alert="Numer inwentarzowy jest za długi" />
                    )}
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="status">Status</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="status" id="status" className="form-control" ref={register({ required: true})}>
                        <option value="1">Aktywny</option>
                        <option value="2">Zablokowany</option>
                        <option value="3">Zwrócony</option>
                        <option value="9">Wybrakowany</option>
                    </select>
                    {errors.classification && (
                        <Error alert="Nieprawidłowy status" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="quantity">Ilość</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="quantity" id="quantity" className="form-control" type="number" ref={register({ required: false })} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="purchase_price">Cena zakupu</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="purchase_price" id="purchase_price" className="form-control" type="number" ref={register({ required: false })} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="unit">Jednostka</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="unit_id" id="unity" className="form-control" ref={register({ required: true, min:1, max:20 })}>
                        {units.list.map(unit =>
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                        )}
                    </select>
                    {errors.unit_id && (
                        <Error alert="Nieprawidłowa jednostka" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="producer">Producent</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="producers_id" id="producer" className="form-control" ref={register({ required: true, min: 1 })}>
                            {producers.list.map(producer =>
                                <option key={producer.id} value={producer.id}>{producer.name}</option>
                            )}
                    </select>
                    {errors.producers_id && (
                        <Error alert="Nieprawidłowy producent" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="operation_system">System operacyjny</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="operation_system" id="operation_system" className="form-control" ref={register({ required: true, min: 1 })}>
                        {operationSystem.list.map(system =>
                            <option key={system.id} value={system.name}>{system.name}</option>
                        )}
                    </select>
                    {errors.operation_system && (
                        <Error alert="Nieprawidłowy system operacyjny" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="type">Typ</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="type_id" id="type" className="form-control" ref={register({ required: true, min: 1, max: 20 })}>
                        {types.list.map(type =>
                            <optgroup key={type.id} label={type.name}>

                                {type.child && type.child.length && type.child.map(element => {
                                    return <option value={element.id} key={element.id}>{element.name}</option>
                                }
                                )}
                            </optgroup>
                        )}
                    </select>
                    {errors.type_id && (
                        <Error alert="Nieprawidłowy typ urządzenia" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="serial_number">Numer seryjny</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="serial_number" id="serial_number" className="form-control" type="string" ref={register({ required: false, minLength: 5, maxLength: 45 })} />

                    {errors.serial_number && (
                        <Error alert="Nieprawidłowy numer seryjny" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="imei">IMEI</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="imei" id="imei" className="form-control" type="string" ref={register({ required: false, minLength: 2, maxLength: 35 })} />

                    {errors.imei && (
                        <Error alert="Nieprawidłowy IMEI" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="address">Adres</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="address_name" id="address" className="form-control" type="string" ref={register({ required: false, minLength: 2, maxLength: 45 })} />

                    {errors.address_name && (
                        <Error alert="Nieprawidłowy adres" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="ip">IP</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="address_ip" id="ip" className="form-control" type="string" ref={register({ required: false, minLength: 7, maxLength: 15 })} />

                    {errors.address_ip && (
                        <Error alert="Nieprawidłowy adres IP" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="mac">MAC</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="address_mac" id="mac" className="form-control" type="string" ref={register({ required: false, minLength: 7, maxLength: 45 })} />

                    {errors.address_mac && (
                        <Error alert="Nieprawidłowy adres MAC" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="description">Opis</label>
                </div>
                <div className="col-12 col-md-10">
                    <textarea name="description" id="description" className="form-control" ref={register({ required: false, minLength: 3, maxLength: 400 })}></textarea>
                    {errors.description && (
                        <Error alert="Nieprawidłowy opis" />
                    )}
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Dodaj urządzenie</button>
        </form>
    );
}
const mapStateToProps = state => ({
    units: state.units,
    types: state.types,
    producers: state.producers,
    operationSystem: state.operationSystem
})

const mapDispatchToPtops = dispatch => ({
    newDevice: device => dispatch(actions.add(device))
});
export default connect(mapStateToProps, mapDispatchToPtops)(createDevice)