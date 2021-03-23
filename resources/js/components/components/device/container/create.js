import React from "react";
import _ from "lodash/fp";
import{ connect } from 'react-redux';
import { useForm } from "react-hook-form";
import Error from '../../../alerts/error';
import actions from '../actions'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import address from '../../../address'




const createDevice = ({ units, types, producers,operationSystem, newDevice }) => {
    const { register, handleSubmit, errors } = useForm();

    const storeDevice = async (values, e) => {
        const API = axios.create({
            baseURL: address + '/devices',
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },

        });

        try {

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
            <h2 className="break-15 text-center">Dodaj nowe urządzenie</h2>
            <div className="form-group">
                    <label htmlFor="name">Nazwa</label>
                    <input name="name" id="name" className="form-control" type="string" ref={register({ required: true, minLength: 7, maxLength: 50 })} />

                    {errors.name&& (
                        <Error alert="Nieprawidłowa nazwa" />
                    )}
            </div>
            <div className="form-group">

                    <label htmlFor="inventory">Numer inwentarzowy</label>


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

            <div className="form-group">

                    <label htmlFor="status">Status</label>

                    <select name="status" id="status" className="form-control" ref={register({ required: true})}>
                        <option value="1">Aktywny</option>
                        <option value="2">Zablokowany</option>
                        <option value="3">Zwrócony</option>
                        <option value="4">Wybrakowany</option>
                    </select>
                    {errors.status && (
                        <Error alert="Nieprawidłowy status" />
                    )}
            </div>
            <div className="form-group">

                    <label htmlFor="quantity">Ilość</label>


                    <input name="quantity" id="quantity" className="form-control" type="number" ref={register({ required: false })} />
            </div>
            <div className="form-group">

                    <label htmlFor="purchase_price">Cena zakupu</label>


                    <input name="purchase_price" id="purchase_price" className="form-control" type="number" ref={register({ required: false })} />
            </div>
            <div className="form-group">

                    <label htmlFor="unit">Jednostka</label>


                    <select name="unit_id" id="unity" className="form-control" ref={register({ required: true, min:1, max:20 })}>
                        {units.list.map(unit =>
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                        )}
                    </select>
                    {errors.unit_id && (
                        <Error alert="Nieprawidłowa jednostka" />
                    )}
            </div>
            <div className="form-group">

                    <label htmlFor="producer">Producent</label>


                    <select name="producers_id" id="producer" className="form-control" ref={register({ required: true, min: 1 })}>
                            {producers.list.map(producer =>
                                <option key={producer.id} value={producer.id}>{producer.name}</option>
                            )}
                    </select>
                    {errors.producers_id && (
                        <Error alert="Nieprawidłowy producent" />
                    )}
            </div>
            <div className="form-group">

                    <label htmlFor="operation_system">System operacyjny</label>


                    <select name="operation_system" id="operation_system" className="form-control" ref={register({ required: false, min: 1 })}>
                        <option key="0" value=""></option>
                        {operationSystem.list.map(system =>
                            <option key={system.id} value={system.name}>{system.name}</option>
                        )}
                    </select>
                    {errors.operation_system && (
                        <Error alert="Nieprawidłowy system operacyjny" />
                    )}
            </div>
            <div className="form-group">

                    <label htmlFor="type">Typ</label>


                    <select name="type_id" id="type" className="form-control" ref={register({ required: true })}>
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
            <div className="form-group">

                    <label htmlFor="serial_number">Numer seryjny</label>


                    <input name="serial_number" id="serial_number" className="form-control" type="string" ref={register({ required: false, minLength: 5, maxLength: 45 })} />

                    {errors.serial_number && (
                        <Error alert="Nieprawidłowy numer seryjny" />
                    )}
            </div>
            <div className="form-group">

                    <label htmlFor="imei">IMEI</label>


                    <input name="imei" id="imei" className="form-control" type="string" ref={register({ required: false, minLength: 2, maxLength: 35 })} />

                    {errors.imei && (
                        <Error alert="Nieprawidłowy IMEI" />
                    )}
            </div>
            <div className="form-group">

                    <label htmlFor="address">Adres</label>


                    <input name="address_name" id="address" className="form-control" type="string" ref={register({ required: false, minLength: 2, maxLength: 45 })} />

                    {errors.address_name && (
                        <Error alert="Nieprawidłowy adres" />
                    )}
            </div>
            <div className="form-group">

                    <label htmlFor="ip">IP</label>


                    <input name="address_ip" id="ip" className="form-control" type="string" ref={register({ required: false, minLength: 7, maxLength: 15 })} />

                    {errors.address_ip && (
                        <Error alert="Nieprawidłowy adres IP" />
                    )}
            </div>
            <div className="form-group">

                    <label htmlFor="mac">MAC</label>


                    <input name="address_mac" id="mac" className="form-control" type="string" ref={register({ required: false, minLength: 7, maxLength: 45 })} />

                    {errors.address_mac && (
                        <Error alert="Nieprawidłowy adres MAC" />
                    )}
            </div>
            <div className="form-group">

                    <label htmlFor="description">Opis</label>


                    <textarea name="description" id="description" className="form-control" ref={register({ required: false, minLength: 3, maxLength: 400 })}></textarea>
                    {errors.description && (
                        <Error alert="Nieprawidłowy opis" />
                    )}
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