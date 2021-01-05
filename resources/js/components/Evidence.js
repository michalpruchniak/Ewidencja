import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { getAllProducers } from './components/producers/operations';
import { getAllUnits } from './components/units/operations';
import { getAllOperationsystem } from './components/operationsystem/operations';
import { getAllDevices } from './components/device/operations';
import Nav from './layout/nav'
import CreateDevice from './components/device/container/create'
import CreateProducers from './components/producers/container/create'
import CreateHandoverProtocol from './components/handoverprotocol/container/create'
import DevicesContainer from './components/device/container/list'
import ProtocolPanel from './components/handoverprotocol/container/panel'
import HandoverprotocolList from './components/handoverprotocol/container/index'
import { ToastContainer } from 'react-toastify';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";





function Evidence({ getAllProducers, getAllUnits, getAllOperationsystem, getAllDevices }) {
    useEffect(() => {
        getAllProducers(),
            getAllUnits(),
            getAllOperationsystem(),
            getAllDevices()
    }, [])
    return (
        <React.Fragment>
            <ProtocolPanel />
            <Router>
                <Nav />
                <Switch>
                    <Route path="/nowe-urzadzenie">
                        <CreateDevice />
                    </Route>
                    <Route path="/nowy-producent">
                        <CreateProducers />
                    </Route>
                    <Route path="/nowy-protokol-przekazania">
                        <CreateHandoverProtocol />
                    </Route>
                    <Route path="/wszystkie-urzadzenia">
                        <DevicesContainer />
                    </Route>
                    <Route path="/protokol-przekazania">
                        <HandoverprotocolList />
                    </Route>
                </Switch>
            </Router>

            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </React.Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    getAllProducers: () => dispatch(getAllProducers()),
    getAllUnits: () => dispatch(getAllUnits()),
    getAllOperationsystem: () => dispatch(getAllOperationsystem()),
    getAllDevices: () => dispatch(getAllDevices())
})
export default connect(null, mapDispatchToProps)(Evidence);
