import React from 'react'
import { connect } from 'react-redux'

import Lack from './panel/lack'
import Panel from './panel/panel'

const ProtocolPanel = ({ handoverProtocol }) => {
    return (
        <React.Fragment>
            {(handoverProtocol.fromTo.length === 0 ? <Lack /> : <Panel /> )}
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol
})

export default connect(mapStateToProps, null)(ProtocolPanel)