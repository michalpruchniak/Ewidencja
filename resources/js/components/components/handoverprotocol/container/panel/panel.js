import React from 'react';
import { connect } from 'react-redux'

const Panel = ({ handoverProtocol, units }) => {
    return (
        <ul>
        <li key="1"><b>Z: </b>{units.list.map(unit =>
                        { return unit.id == handoverProtocol.fromTo[0].from ? unit.name : ''}
        )}</li>
        <li key="2"><b>Do: </b>{units.list.map(unit =>
                        { return unit.id == handoverProtocol.fromTo[0].to ? unit.name : ''}
        )}</li>
        </ul>
    )
}

const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol,
    units: state.units
});

export default connect(mapStateToProps, null)(Panel);