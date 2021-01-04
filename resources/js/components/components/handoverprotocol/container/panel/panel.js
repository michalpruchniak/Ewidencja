import React from 'react';
import { connect } from 'react-redux'

import {
            HashRouter as Router,
            Link
       } from 'react-router-dom'

const Panel = ({ handoverProtocol, units }) => {
    return (
        <ul>
            <li key="1"><b>Z: </b>{units.list.find(x => x.id == handoverProtocol.fromTo[0].from).name}</li>
            <li key="2"><b>Do: </b>{ units.list.find(x => x.id == handoverProtocol.fromTo[0].to).name}</li>
            <li key="3"><b>liczba elementów:</b>{handoverProtocol.list.length}</li>
            <Router>
                <li key="4"><Link to="/protokol-przekazania" className="dropdown-item">Pokaż protokół przekazania</Link></li>
            </Router>
        </ul>
    )
}

const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol,
    units: state.units
});

export default connect(mapStateToProps, null)(Panel);