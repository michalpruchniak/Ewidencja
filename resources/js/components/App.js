import React from 'react';
import Units from './components/units/container/list'
import People from './components/people/container/list'
import CreateDevice from './components/device/container/create'
import { ToastContainer } from 'react-toastify';




function App() {
  return (
   <div>
     <Units />
     <People />
     <CreateDevice />
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
