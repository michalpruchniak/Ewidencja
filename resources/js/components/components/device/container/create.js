import React from "react";
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import storeDevice from "../storeDevice";
import Error from '../../../alerts/error';


export default function App() {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        console.log(JSON.stringify(data));
    };


    return (
        <form onSubmit={handleSubmit(storeDevice)}>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label>Typ sieci</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="network_type" className="form-control" ref={register({ min: 1, max: 6 })}>
                        <option value="1">PSTD</option>
                        <option value="2">Internet</option>
                        <option value="3">ODN</option>
                        <option value="4">Maszyna do pisania</option>
                        <option value="5">GSM</option>
                        <option value="6">Nie podłączony</option>
                    </select>
                    {errors.network_type && (
                        <Error alert="To nie jest prawidłowy typ sieci" />
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
                    <label>Klasyfikacja</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="classification" className="form-control" ref={register({ required: false, min: 0, max: 5 })}>
                        <option value="1">ŚT</option>
                        <option value="2">PŚT</option>
                        <option value="3">EP</option>
                        <option value="4">WNiP</option>
                        <option value="5">Pozostałe</option>
                        <option value="0">Bez klasyfikacji</option>
                    </select>
                    {errors.classification && (
                        <Error alert="Nieprawidłowa klasyfikacja" />
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
            <input type="submit" />
        </form>
    );
}