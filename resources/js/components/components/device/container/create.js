import React from "react";
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import{ connect } from 'react-redux';
import { useForm } from "react-hook-form";
import storeDevice from "../storeDevice";
import Error from '../../../alerts/error';


const createDevice = ({ units, types }) => {
    const { register, handleSubmit, errors } = useForm();


    return (
        <form onSubmit={handleSubmit(storeDevice)}>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>Nazwa</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="name" className="form-control" type="string" ref={register({ required: true, minLength: 7, maxLength: 50 })} />

                    {errors.name&& (
                        <Error alert="Nieprawidłowa nazwa" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>Numer inwentarzowy</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="inventory" className="form-control" type="string" ref={register({ required: true, minLength: 5, maxLength: 40 })} />

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
                    <label>Status</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="status" className="form-control" ref={register({ required: true})}>
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
                    <label>Ilość</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="quantity" className="form-control" type="number" ref={register({ required: false })} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>Cena zakupu</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="purchase_price" className="form-control" type="number" ref={register({ required: false })} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>Jednostka</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="unit_id" className="form-control" ref={register({ required: true, min:1, max:20 })}>
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
                    <label>Producent</label>
                </div>
                <div className="col-12 col-md-10">
                    {/* It should be comple. At this time I don't have a producer's redux store */}
                    <select name="producers_id" className="form-control" ref={register({ required: true, min: 1, max: 20 })}>
                    </select>
                    {errors.producers_id && (
                        <Error alert="Nieprawidłowy producent" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>Typ</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="type_id" className="form-control" ref={register({ required: true, min: 1, max: 20 })}>
                        {types.list.map(type =>
                            <option key={type.id} value={type.id}>{type.name}</option>
                        )}
                    </select>
                    {errors.type_id && (
                        <Error alert="Nieprawidłowy typ urządzenia" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>Numer seryjny</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="serial_number" className="form-control" type="string" ref={register({ required: false, minLength: 5, maxLength: 45 })} />

                    {errors.serial_number && (
                        <Error alert="Nieprawidłowy numer seryjny" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>IMEI</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="imei" className="form-control" type="string" ref={register({ required: false, minLength: 2, maxLength: 35 })} />

                    {errors.imei && (
                        <Error alert="Nieprawidłowy IMEI" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>Adres</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="address_name" className="form-control" type="string" ref={register({ required: false, minLength: 2, maxLength: 45 })} />

                    {errors.address_name && (
                        <Error alert="Nieprawidłowy adres" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>IP</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="address_ip" className="form-control" type="string" ref={register({ required: false, minLength: 7, maxLength: 15 })} />

                    {errors.address_ip && (
                        <Error alert="Nieprawidłowy adres IP" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>MAC</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="address_mac" className="form-control" type="string" ref={register({ required: false, minLength: 7, maxLength: 45 })} />

                    {errors.address_mac && (
                        <Error alert="Nieprawidłowy adres MAC" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>Opis</label>
                </div>
                <div className="col-12 col-md-10">
                    <textarea name="description" className="form-control" ref={register({ required: false, minLength: 3, maxLength: 400 })}></textarea>
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
    types: state.types
})

export default connect(mapStateToProps)(createDevice)