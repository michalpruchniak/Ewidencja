import React from 'react'
import _ from "lodash/fp";
import actions from '../actions'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import Error from '../../../alerts/error'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const createProducer = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const storeProducer = async (values, e) => {
        const API = axios.create({
            baseURL: 'http://localhost:8000/producers',
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
                            props.add({
                                id: res.data.id,
                                name: res.data.name
                            });

                        });
            e.target.reset();
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <form onSubmit={handleSubmit(storeProducer)}>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="name">Nazwa</label>
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

const mapDispatchToPtops = dispatch => ({
    add: person => dispatch(actions.add(person))
});
export default connect(null, mapDispatchToPtops)(createProducer);