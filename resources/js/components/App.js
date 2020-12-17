import React from 'react';
import Units from './components/units/container/list'
import People from './components/people/container/list'
import Producers from './components/producers/container/list'
import CreateDevice from './components/device/container/create'
import CreateProducers from './components/producers/container/create'
import { ToastContainer } from 'react-toastify';




function App() {
  return (
   <div>
     <Units />
     <People />
     <Producers />
     <CreateDevice />
     <CreateProducers />
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

export default App;
