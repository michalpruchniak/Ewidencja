import React, { useEffect } from 'react'
import _ from "lodash/fp";
import { useForm } from 'react-hook-form'
import storeProducer from "../storeProducer";
import Error from '../../../alerts/error'


const createProducer = () => {
    const { register, handleSubmit, errors } = useForm();

    return(
        <form onSubmit={handleSubmit(storeProducer)}>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label for="name">Nazwa</label>
                </div>
                <div className="col-12 col-md-10">
                    <input name="name" type="strig" ref={register({ required:true, minLength: 2, maxLength: 45 })} />
                    {_.get("name.type", errors) === "required" && (
                        <Error alert="To pole jest wymagane" />
                    )}
                    {_.get("name.type", errors) === "minLength" && (
                        <Error alert="To pole musi się składać z przynajmniej 2 znaków" />
                    )}
                    {_.get("name.type", errors) === "maxLength" && (
                        <Error alert="To pole musi się składać z maksymalnie 40 znaków" />
                    )}
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Dodaj nowego producenta</button>
        </form>
    );

}


export default createProducer;