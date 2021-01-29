import React from 'react';
import { connect } from 'react-redux'

import {
            HashRouter as Router,
            Link
       } from 'react-router-dom'

const Panel = ({ handoverProtocol, units }) => {
    return (
        <ul>
            <li key="1" className="row"><div className="col-2"><b>Z: </b></div><div className="col-10">{units.list.find(x => x.id == handoverProtocol.fromTo[0].from).name}</div></li>
            <li key="2" className="row"><div className="col-2"><b>Do: </b></div><div className="col-10">{ units.list.find(x => x.id == handoverProtocol.fromTo[0].to).name}</div></li>
            <li key="3" className="row"><div className="col-6"><b>liczba elementów:</b></div><div className="col-6">{handoverProtocol.list.length}</div></li>
            <Router>
                <li key="4" className="break-15"><Link to="/protokol-przekazania" className="btn btn-primary">Pokaż protokół przekazania</Link></li>
            </Router>
        </ul>
    )
}

const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol,
    units: state.units
});

export default connect(mapStateToProps, null)(Panel);