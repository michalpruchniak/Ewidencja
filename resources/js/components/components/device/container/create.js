import React from "react";
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import{ connect } from 'react-redux';
import { useForm } from "react-hook-form";
import storeDevice from "../storeDevice";
import SelectUnit from '../../units/container/select';
import Error from '../../../alerts/error';


const createDevice = ({ units }) => {
    const { register, handleSubmit, errors } = useForm();


    return (
        <form onSubmit={handleSubmit(storeDevice)}>

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
                    <select name="unit_id" className="form-control" ref={register({ required: true })}>
                        {units.list.map(unit =>
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                        )}
                    </select>
                    {errors.unit_id && (
                        <Error alert="Nieprawidłowa jednostka" />
                    )}
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Dodaj urządzenie</button>
        </form>
    );
}
const mapStateToProps = state => ({
    units: state.units
})

export default connect(mapStateToProps)(createDevice)