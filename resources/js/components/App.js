import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllProducers } from './components/producers/operations';
import { getAllUnits } from './components/units/operations';
import { getAllOperationsystem } from './components/operationsystem/operations';
import { getAllDevices } from './components/device/operations';
import Evidence from './Evidence'

function App({ getAllProducers, getAllUnits, getAllOperationsystem, getAllDevices }) {
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    getAllProducers(),
      getAllUnits(),
      getAllOperationsystem(),
      getAllDevices()
      setTimeout(() => setIsLoaded(false), 1500)
  }, [])
  return (
    <div>
      {isLoaded ? <span>Loading...</span> : <Evidence />}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  getAllProducers: () => dispatch(getAllProducers()),
  getAllUnits: () => dispatch(getAllUnits()),
  getAllOperationsystem: () => dispatch(getAllOperationsystem()),
  getAllDevices: () => dispatch(getAllDevices())
})
export default connect(null, mapDispatchToProps)(App);

