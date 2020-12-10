import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { getAllUnits } from '../operations'

const UnitsContainer = ({units, getAllUnits}) => {
    useEffect(() =>{ getAllUnits()}, [])
    return <ul>
        {units.list.map(unit =>
            <li key={unit.id}>{unit.name}</li>
        )}
    </ul>
}



const mapStateToProps = state => ({
    units: state.units
})
const mapDispatchToProps = dispatch => ({
    getAllUnits: () => dispatch(getAllUnits())
  })
export default connect(mapStateToProps, mapDispatchToProps)(UnitsContainer)
