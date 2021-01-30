import React from 'react'
import { connect } from 'react-redux'

import List from  './list'
import Error from '../../../alerts/error'

const Protocol = ({ handoverProtocol }) => {
    if(handoverProtocol.from.length > 0){
        return <List />
    } else {
        return <Error alert="Protokół przekazania nie został utworzony" />
    }
}

const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol
});

export default connect(mapStateToProps, null)(Protocol);