import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import _ from "lodash/fp";
import actions from '../actions'
import { useForm } from 'react-hook-form'
import Error from '../../../alerts/error'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getAllUnits } from '../../units/operations'

const createHandoverProtocol = ({ units, newprotocol }) => {
    useEffect(() => {getAllUnits()}, [])
    const { register, handleSubmit, errors } = useForm();

    const addNewwProtocol = (e) => {
        newprotocol(e);
    }

    return (
        <form method= "post" onSubmit={handleSubmit(addNewwProtocol)}>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="name">Nadawca</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="from" ref={register({ required: true})}>
                        {units.list.map(unit =>
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-2">
                    <label htmlFor="name">Odbiorca</label>
                </div>
                <div className="col-12 col-md-10">
                    <select name="to" ref={register({ required: true })}>
                        {units.list.map(unit =>
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                        )}
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Dodaj urządzenie</button>

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