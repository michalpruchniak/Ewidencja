import React from 'react'
import { connect } from 'react-redux'

import address from '../../../address'

const Document = ({ protocol, units }) => {
    return(
        <div className="card break-15">
            <div className="card-body">
                <div className="row">
                    <div className="col-5 col-md-4">
                        <div className="col-12">
                            <b>Z: </b> {units.list.find(x => x.id == protocol.from_id).name}
                        </div>
                        <div className="col-12">
                            <b>Do: </b>
                             {units.list.find(x => x.id == protocol.to_id).name}
                        </div>
                        <div className="col-12">
                            <b>Podstawa: </b>
                             {protocol.basics}
                        </div>
                    </div>
                    <div className="col-7 col-md-8">
                        <h5>Urządzenia</h5>
                        <ul>
                            {protocol.devices.map((device) => <li>{device}</li>)}
                        </ul>
                    </div>

                </div>
                <a href={address + "/print/" + protocol.id} class="card-link" target="_blanc">Drukuj dokument przekazania</a>

            </div>

        </div>
    );


}
const mapStateToProps = state => ({
    units: state.units
})
export default connect(mapStateToProps, null)(Document);