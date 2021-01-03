import React from 'react';
import { connect } from 'react-redux'

const Panel = ({ handoverProtocol, units }) => {
    return (
        <ul>
            <li key="1"><b>Z: </b>{units.list.find(x => x.id == handoverProtocol.fromTo[0].from).name}</li>
            <li key="2"><b>Do: </b>{ units.list.find(x => x.id == handoverProtocol.fromTo[0].to).name}</li>
            <li key="3"><b>liczba elementów:</b>{handoverProtocol.list.length}</li>
        </ul>
    )
}

const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol,
    units: state.units
});

export default connect(mapStateToProps, null)(Panel);