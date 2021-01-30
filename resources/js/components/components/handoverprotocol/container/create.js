import React from 'react'
import { connect } from 'react-redux';
import _ from "lodash/fp";
import actions from '../actions'
import { useForm } from 'react-hook-form'
import Error from '../../../alerts/error'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const createHandoverProtocol = ({ units, newprotocol }) => {
    const { register, handleSubmit, errors } = useForm();

    const addNewProtocol = (e) => {

        try{
            newprotocol(e);
            toast.success('Protokół przekazania został utworzony', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch(error){
            console.log(error)
        }
    }

    return (
        <form method= "post" onSubmit={handleSubmit(addNewProtocol)}>
            <h2 className="break-15 text-center">Dodaj nowy protokół przekazania</h2>

            <div className="form-group">
                    <label htmlFor="name">Nadawca</label>
                    <select name="from" className="form-control" ref={register({ required: true})}>
                        {units.list.map(unit =>
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                        )}
                    </select>
            </div>
            <div className="form-group">
                    <label htmlFor="name">Odbiorca</label>
                    <select name="to" className="form-control" ref={register({ required: true })}>
                        {units.list.map(unit =>
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                        )}
                    </select>
            </div>
            <button type="submit" className="btn btn-primary">Nowy protokół przekazania</button>

        </form>
    )
}
const mapStateToProps = state => ({
    units: state.units
})

const mapDispatchToProps = dispatch => ({
    newprotocol: protocol => dispatch(actions.newprotocol(protocol))

})

export default connect(mapStateToProps, mapDispatchToProps)(createHandoverProtocol)