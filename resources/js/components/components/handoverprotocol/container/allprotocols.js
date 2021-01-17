import React from 'react';
import { connect } from 'react-redux'

import Document from './document'

const allProtocols = ({ handoverProtocol }) => {
    return(
        <React.Fragment>
            {handoverProtocol.protocols.map(protocol => <Document key={protocol.id} protocol={protocol} />)}
        </React.Fragment>
    );

}
const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol
})
export default connect(mapStateToProps, null)(allProtocols);