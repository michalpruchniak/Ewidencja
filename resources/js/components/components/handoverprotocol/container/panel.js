import React from 'react'
import { connect } from 'react-redux'

import Lack from './panel/lack'
import Panel from './panel/panel'

const ProtocolPanel = ({ handoverProtocol }) => {
    return (
        <div className="panel">
            {(handoverProtocol.from.length < 1 ? <Lack /> : <Panel /> )}
        </div>
    );
}

const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol
})

export default connect(mapStateToProps, null)(ProtocolPanel)