import React from 'react'
import { connect } from 'react-redux'

const List = ({ handoverProtocol, units }) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4 col-md-2"><b>Z</b></div>
                <div className="col-8 col-md-10">{units.list.find(x => x.id == handoverProtocol.fromTo[0].from).name}</div>
            </div>
            <div className="row">
                <div className="col-4 col-md-2"><b>Do</b></div>
                <div className="col-8 col-md-10">{units.list.find(x => x.id == handoverProtocol.fromTo[0].to).name}</div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol,
    units: state.units
});

export default connect(mapStateToProps, null)(List);