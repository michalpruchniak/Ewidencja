import React, { useEffect} from 'react';

import Nav from './layout/nav'
import CreateDevice from './components/device/container/create'
import CreateProducers from './components/producers/container/create'
import CreateHandoverProtocol from './components/handoverprotocol/container/create'
import CreateOperationSystem from './components/operationsystem/container/create'
import DevicesContainer from './components/device/container/list'
import ProtocolPanel from './components/handoverprotocol/container/panel'
import HandoverprotocolList from './components/handoverprotocol/container/index'
import AllProtocols from './components/handoverprotocol/container/allprotocols'
import { ToastContainer } from 'react-toastify';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";





function Evidence() {
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
                    <Route path="/nowy-system-operacyjny">
                        <CreateOperationSystem />
                    </Route>
                    <Route path="/wszystkie-urzadzenia">
                        <DevicesContainer />
                    </Route>
                    <Route path="/protokol-przekazania">
                        <HandoverprotocolList />
                    </Route>
                    <Route path="/wszystkie-protokoly-przekazania">
                        <AllProtocols />
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


export default Evidence;
