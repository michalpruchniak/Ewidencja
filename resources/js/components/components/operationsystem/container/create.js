import React from 'react'
import _ from "lodash/fp";
import actions from '../actions'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import Error from '../../../alerts/error'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import address from '../../../address'



const createOperatyionsystem = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const storeProducer = async (values, e) => {
        const API = axios.create({
            baseURL: address + '/operationsystem',
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
            <h2 className="break-15 text-center">Dodaj nowy system operacyjny</h2>

            <div className="form-group">
                    <label htmlFor="name">Nazwa</label>
                    <input name="name" type="strig" className="form-control" ref={register({ required:true, minLength: 2, maxLength: 30 })} />
                    {_.get("name.type", errors) === "required" && (
                        <Error alert="To pole jest wymagane" />
                    )}
                    {_.get("name.type", errors) === "minLength" && (
                        <Error alert="To pole musi się składać z przynajmniej 2 znaków" />
                    )}
                    {_.get("name.type", errors) === "maxLength" && (
                        <Error alert="To pole musi się składać z maksymalnie 30 znaków" />
                    )}
            </div>
            <button type="submit" className="btn btn-primary">Dodaj nowy system operacyjny</button>
        </form>
    );

}

const mapDispatchToPtops = dispatch => ({
    add: operationsystem => dispatch(actions.add(operationsystem))
});
export default connect(null, mapDispatchToPtops)(createOperatyionsystem);