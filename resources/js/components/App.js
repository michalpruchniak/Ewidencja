import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllProducers } from './components/producers/operations';
import { getAllUnits } from './components/units/operations';
import { getAllOperationsystem } from './components/operationsystem/operations';
import Nav from './layout/nav'
import CreateDevice from './components/device/container/create'
import CreateProducers from './components/producers/container/create'
import { ToastContainer } from 'react-toastify';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App({ getAllProducers, getAllUnits, getAllOperationsystem }) {
  useEffect(() => {
     getAllProducers(),
     getAllUnits(),
     getAllOperationsystem()
  }, [])

  return (
   <div>
     <Router>
        <Nav />
        <Switch>
          <Route path="/nowe-urzadzenie">
            <CreateDevice />
          </Route>
          <Route path="/nowy-producent">
            <CreateProducers />
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
   </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getAllProducers: () => dispatch(getAllProducers()),
  getAllUnits: () => dispatch(getAllUnits()),
  getAllOperationsystem: () => dispatch(getAllOperationsystem())
})
export default connect(null, mapDispatchToProps)(App);
