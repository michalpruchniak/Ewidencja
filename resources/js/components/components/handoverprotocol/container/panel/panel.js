import React from 'react';
import { connect } from 'react-redux'

const Panel = ({ handoverProtocol }) => {
    return (
        <React.Fragment>
            {handoverProtocol.fromTo.map(element =>
                <ul>
                    <li>Z: {element.from}</li>
                    <li>Do: {element.to}</li>
                </ul>
            )}
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    handoverProtocol: state.handoverProtocol
});

export default connect(mapStateToProps, null)(Panel);